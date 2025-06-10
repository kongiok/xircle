import { err, ok, type Result } from "neverthrow";
import { defineStore } from "pinia";
import { match } from "ts-pattern";

import { z } from "zod/v4";

const beersSchema = z.int().min(0).max(999).nonnegative();

const validateBeerCounts = (input: number): Result<number, Error> => {
    const parsedResult = beersSchema.safeParse(input);
    return parsedResult.error ? err(parsedResult.error) : ok(parsedResult.data);
};

const useBeers = defineStore("beers", {
    state: () => ({
        beers: beersSchema.parse(0),
    }),
    actions: {
        addMoreBeers(beerCounts?: number) {
            if (beerCounts === undefined) {
                this.beers += 1;
                return;
            }
            const beersToBeAdd = validateBeerCounts(beerCounts);
            return beersToBeAdd
                .map((counts) => (this.beers += counts))
                .mapErr((err) => console.error(err));
        },
        takeOneBeer() {
            const beersLeftValidate = validateBeerCounts(this.beers);
            const beersLeft = beersLeftValidate
                .map(() => this.beers)
                .mapErr(() => 0)
                .unwrapOr(0);

            match(beersLeft)
                .when(
                    (v) => v >= 1,
                    () => (this.beers -= 1),
                )
                .otherwise(() => {
                    this.beers = 0;
                });
        },
    },
});

export { useBeers };
