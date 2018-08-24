<?php

use Faker\Generator as Faker;

$factory->define(App\Cost::class, function (Faker $faker) {
    $randomHouseId = App\House::inRandomOrder()->get()->first()->id;

    return [
        'name' => $faker->text(100),
        'house_id' => $randomHouseId,
        'amount' => $faker->randomFloat(2, 0, 10000),
        'date' => $faker->date()
    ];
});
