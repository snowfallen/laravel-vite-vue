<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class TestController extends Controller
{
    /**
     * @return string[]
     */
    public function getArray(): array
    {
        return ['test' => 'test1', 'name' => 'sano'];
    }
}
