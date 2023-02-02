<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserSettingsRequest;
use App\Http\Requests\UpdateUserSettingsRequest;
use App\Models\UserSettings;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserSettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userSettings = Auth::user();
        $userSettingsData = [];
        if($userSettings->settings == null){
            $userSettingsData["default_channel"] = "";
            $userSettingsData["interests"] = [];
        }else{
            $userSettingsData["default_channel"] = $userSettings->settings->default_new_channel;
            $userSettingsData["interests"] = unserialize($userSettings->settings->interest);
        }
        return Inertia::render('Settings',["settings"=>$userSettingsData]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserSettingsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserSettingsRequest $request)
    {
        $currentUser = Auth::user();
        $newsSource = $request->source;
        $interests = $request->interests;
        $interestsInString = serialize($interests);
        UserSettings::updateOrInsert(
            ['user_id' => $currentUser->id],
            ['default_new_channel' => $newsSource, 'interest' => $interestsInString]
        );

        return redirect(route('Homepage'))->withSuccess("News preference updated successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserSettings  $userSettings
     * @return \Illuminate\Http\Response
     */
    public function show(UserSettings $userSettings)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserSettings  $userSettings
     * @return \Illuminate\Http\Response
     */
    public function edit(UserSettings $userSettings)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserSettingsRequest  $request
     * @param  \App\Models\UserSettings  $userSettings
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserSettingsRequest $request, UserSettings $userSettings)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserSettings  $userSettings
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserSettings $userSettings)
    {
        //
    }
}
