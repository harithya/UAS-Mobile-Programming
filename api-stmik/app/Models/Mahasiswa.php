<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    /**
     * Nama table
     *
     * @var string
     */
    protected $table = "mahasiswa";

    /**
     * Field yang tidak di ijinkan
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * Fungsi timestamps
     *
     * @var boolean
     */
    public $timestamps = false;
}
