<?php

namespace App\Models;

use App\Http\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Cart extends Model
{
    use UsesUuid;

    protected $fillable = ['user_id'];

    //En caso de utilizar llaves de carrito.
    protected static function booted() {
        static::creating(function ($model) {
            $model->key = (string) Str::uuid();
        });
    }

    public function user () {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function items () {
        return $this->belongsToMany(Product::class, 'cart_items');
    }
}
