<?php

use Faker\Generator as Faker;

$factory->define(App\UserHouse::class, function (Faker $faker) {
    repeat:
    $randomUserId = App\User::inRandomOrder()->get()->first()->id;
    $randomHouseId = App\House::inRandomOrder()->get()->first()->id;

    try {
        return [
            'house_id' => $randomHouseId,
            'user_id' => $randomUserId
        ];
    } catch (\Illuminate\Database\QueryException $e) {
        goto repeat;
    }
});
