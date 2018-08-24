<?php

use Illuminate\Database\Seeder;

class UsersHousesTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\UserHouse::class, 250)->create();
    }
}
