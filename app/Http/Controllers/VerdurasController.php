<?php

namespace App\Http\Controllers;

use App\Models\Verduras;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class VerdurasController extends Controller
{
    public function index()
    {
        $verduras = Verduras::orderBy('id')->get();
        return response()->json($verduras);
    }

    public function guardar(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|string|max:255',
            'precioPorKg' => 'required|numeric|min:0',
        ]);

        $verdura = Verduras::create([
            'nombre' => $validatedData['nombre'],
            'precioPorKg' => $validatedData['precioPorKg'],
        ]);

        return response()->json($verdura, 201); // Devuelve la verdura creada
    }

    public function show($id)
    {
        $verdura = Verduras::findOrFail($id);
        return response()->json($verdura);
    }

    public function guardaredit(Request $request, $id)
    {
        $verdura = Verduras::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'nombre' => [
                'required',
                Rule::unique('verduras', 'nombre')->ignore($verdura->id)
            ],
            'precioPorKg' => 'required|numeric|decimal:0,2',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $verdura->nombre = $request->nombre;
        $verdura->precioPorKg = $request->precioPorKg;
        $verdura->save();

        return response()->json([
            'message' => 'Verdura modificada correctamente',
            'verdura' => $verdura
        ]);
    }

    public function cambiarEstado($id)
    {
        $verdura = Verduras::findOrFail($id);
        $verdura->stock = !$verdura->stock;
        $verdura->save();

        return response()->json([
            'message' => 'Estado cambiado correctamente',
            'verdura' => $verdura
        ]);
    }
}
