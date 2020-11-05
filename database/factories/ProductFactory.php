<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(NULL, 0, 1000),
            'description' => $this->faker->text(),
            'image' => $this->faker->image('public/storage/components', 400, 400, 'technics', false)
        ];
    }
}
