<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mahasiswa;
use App\Services\MahasiswaService;
use Illuminate\Support\Facades\Storage;


class MahasiswaController extends Controller
{

    protected $service;

    public function __construct(MahasiswaService $mahasiswaService)
    {
        $this->service = $mahasiswaService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mahasiswa = Mahasiswa::all();
        return response()->json(['status' => true, 'results' => $mahasiswa]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'npm' => 'required',
            'nama' => 'required|string',
            'tempat_lahir' => 'required|string',
            'jurusan' => 'required',
            'alamat' => 'nullable|string',
            'photo' => 'required|mimes:png,jpg,svg,jpeg|max:10500'
        ]);

        $upload = $this->service->uploadFile($request->photo);
        Mahasiswa::create([
            'npm' => $request->npm,
            'nama' => $request->nama,
            'tempat_lahir' => $request->tempat_lahir,
            'jurusan' => $request->jurusan,
            'alamat' => $request->alamat,
            'photo' => $upload
        ]);
        return response()->json(['status' => true, 'message' => 'berhasil menambahkan data']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $mahasiswa = Mahasiswa::find($id);
        return response()->json(['status' => true, 'result' => $mahasiswa]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'npm' => 'required',
            'nama' => 'required|string',
            'tempat_lahir' => 'required|string',
            'jurusan' => 'required',
            'alamat' => 'nullable|string',
            'photo' => 'nullable|mimes:png,jpg,svg,jpeg|max:10500'
        ]);

        if ($request->hasFile('photo')) {
            $this->service->destroyFile($id);
            $file = $this->service->uploadFile($request->photo);
        } else {
            $file = Mahasiswa::find($id);
            $file = $file->photo;
        }

        Mahasiswa::find($id)->update([
            'npm' => $request->npm,
            'nama' => $request->nama,
            'tempat_lahir' => $request->tempat_lahir,
            'jurusan' => $request->jurusan,
            'alamat' => $request->alamat,
            'photo' => $file
        ]);
        return response()->json(['status' => true, 'message' => 'berhasil mengubah data']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->service->destroyFile($id);
        Mahasiswa::destroy($id);
        return response()->json(['status' => true, 'message' => 'Berhasil menghapus data']);
    }
}
