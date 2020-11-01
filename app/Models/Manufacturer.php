<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
{
    use HasFactory;
    
    public $timestamps = false;

    protected $guarded = [];

    public function products()
    {
        return $this->hasMany('App\Models\Manufacturer');
    }
}
