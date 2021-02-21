<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class MahasiswaService
{
    /**
     * Upload file photo mahasiswa
     *
     * @return string
     */
    public function uploadFile($file)
    {
        $fileName = md5(time()) . '.' . $file->getClientOriginalExtension();
        $upload =  Storage::putFileAs('public/photo/', $file, $fileName);
        return $fileName;
    }

    /**
     * Upload file bukti capaian
     *
     * @param int $id
     * @param string $role
     */
    public function destroyFile($id)
    {
        $file = DB::table('mahasiswa')->where('id', $id)->first();
        $file = 'public/photo/' . $file->photo;
        // jika file tersedia
        if (Storage::exists($file)) {
            return Storage::delete($file);
        }
    }
}
