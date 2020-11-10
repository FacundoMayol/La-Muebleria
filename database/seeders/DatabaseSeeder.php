<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $categories_names = ['tables', 'chairs', 'desks', 'armchairs', 'bookshelfs'];
        foreach($categories_names as $c){
            \App\Models\Product::factory()
            ->has(\App\Models\Image::factory()->count(1), 'images')
            ->has(\App\Models\Rating::factory()->count(4), 'ratings')
            ->count(5)
            ->forCategory(['name' => $c])
            ->create();
        }
    }
}
