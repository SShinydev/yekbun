<?php

namespace App\Http\Controllers\apps\income;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Income extends Controller
{
  public function index()
  {
    return view('content.incomes.index');
  }

  public function userIncome()
  {
    return view('content.user-income.index');
  }

  public function onlineShopIncome()
  {
    return view('content.online-shop-income.index');
  }

  public function serviceIncome()
  {
    return view('content.service-income.index');
  }

  public function eventsIncome()
  {
    return view('content.events-income.index');
  }  
  
  public function musicIncome()
  {
    return view('content.music-income.index');
  }  
  
  public function videoIncome()
  {
    return view('content.video-income.index');
  }  
  
  public function donationIncome()
  {
    return view('content.donation-income.index');
  }

  public function dailyIncome()
  {
    return view('content.total-income.index');
  }

  public function monthlyIncome()
  {
    return view('content.total-income.month');
  }

  public function yearlyIncome()
  {
    return view('content.total-income.year');
  }
}
