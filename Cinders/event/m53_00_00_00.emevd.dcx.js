// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DarkSouls3
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// ==/EMEVD==

Event(0, Default, function() {
    SkipIfEventFlag(1, ON, TargetEventFlagType.EventFlag, 250002000)
    InitializeEvent(0, 15300000, 0); // Arena
    
    SkipIfEventFlag(3, OFF, TargetEventFlagType.EventFlag, 250002000)
    InitializeEvent(0, 15300100, 0); // Trial of Perseverance
    InitializeCommonEvent(20050010, 99003020, 5301000, 6000);
    InitializeCommonEvent(20050010, 99003030, 5301001, 6000);
});

Event(15300000, Default, function() {
    GotoIfHollowArenaMatchType(Label.LABEL0, HollowArenaMatchType.Duel);
    GotoIfHollowArenaMatchType(Label.LABEL1, HollowArenaMatchType.TwoPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL2, HollowArenaMatchType.FourPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL3, HollowArenaMatchType.SixPlayerBrawl);
    GotoIfHollowArenaMatchType(Label.LABEL4, HollowArenaMatchType.TwoVersusThree);
    GotoIfHollowArenaMatchType(Label.LABEL5, HollowArenaMatchType.ThreeVersusThree);
    Label0();
    InitializeCommonEvent(20005920, 0, 15305300, 10020000, 10020010);
    InitializeCommonEvent(20005930, 15305300);
    InitializeCommonEvent(20005941, 15305300);
    EndUnconditionally(EventEndType.End);
    Label1();
    InitializeCommonEvent(20005920, 1, 15305300, 10020001, 10020011);
    GotoUnconditionally(Label.LABEL9);
    Label2();
    InitializeCommonEvent(20005920, 2, 15305300, 10020002, 10020012);
    GotoUnconditionally(Label.LABEL9);
    Label3();
    InitializeCommonEvent(20005920, 3, 15305300, 10020003, 10020013);
    GotoUnconditionally(Label.LABEL9);
    Label4();
    InitializeCommonEvent(20005920, 4, 15305300, 10020004, 10020014);
    GotoUnconditionally(Label.LABEL9);
    Label5();
    InitializeCommonEvent(20005920, 5, 15305300, 10020005, 10020015);
    GotoUnconditionally(Label.LABEL9);
    Label9();
    InitializeCommonEvent(20005940, 15305300);
});

// Trial of Perseverance
Event(15300100, Default, function() {
    SetMapCeremony(40, 0, 0);
    
    // Generators
    DeactivateGenerator(5300500, Disabled);
    DeactivateGenerator(5300501, Disabled);
    DeactivateGenerator(5300502, Disabled);
    DeactivateGenerator(5300503, Disabled);
    DeactivateGenerator(5300504, Disabled);
    DeactivateGenerator(5300505, Disabled);
    DeactivateGenerator(5300506, Disabled);
    DeactivateGenerator(5300507, Disabled);
    DeactivateGenerator(5300508, Disabled);
    DeactivateGenerator(5300509, Disabled);
    DeactivateGenerator(5300510, Disabled);
    DeactivateGenerator(5300511, Disabled);
    DeactivateGenerator(5300512, Disabled);
    DeactivateGenerator(5300513, Disabled);
    DeactivateGenerator(5300514, Disabled);
    DeactivateGenerator(5300515, Disabled);
    DeactivateGenerator(5300516, Disabled);
    DeactivateGenerator(5300517, Disabled);
    DeactivateGenerator(5300518, Disabled);
    DeactivateGenerator(5300519, Disabled);
    DeactivateGenerator(5300520, Disabled);
    DeactivateGenerator(5300521, Disabled);
    DeactivateGenerator(5300522, Disabled);
    DeactivateGenerator(5300523, Disabled);
    DeactivateGenerator(5300524, Disabled);
    DeactivateGenerator(5300525, Disabled);
    DeactivateGenerator(5300526, Disabled);
    DeactivateGenerator(5300527, Disabled);
    DeactivateGenerator(5300528, Disabled);
    DeactivateGenerator(5300529, Disabled);
    DeactivateGenerator(5300530, Disabled);
    
    SetCharacterGravity(5300900, Enabled);
    
    WaitFixedTimeSeconds(10.0);
    
    DisplayGenericDialog(99003012, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    InitializeEvent(0, 15300101, 0);
    InitializeEvent(0, 15300103, 0);
});

// Wave Loop
Event(15300101, Default, function() {
    InitializeEvent(0, 15300102, 0);
    WaitFixedTimeSeconds(90.0);
    EndUnconditionally(EventEndType.Restart);
    //WarpPlayer(53, 0, 5300500);
});

// Unlock Primordial Forging after 15 minutes
Event(15300103, Default, function() {
    WaitFixedTimeSeconds(900.0);
    
    SkipIfEventFlag(5, ON, TargetEventFlagType.EventFlag, 25000080);
    DisplayGenericDialog(99004010, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    SetEventFlag(25000080, ON); // Primordial Weapons
    SetEventFlag(25000081, ON); // Primordial Armor
    SetEventFlag(25000082, ON); // Primordial Spells
    SetEventFlag(25000083, ON); // Primordial Rings
});

// Pick Random Wave
Event(15300102, Default, function() {
    SetEventFlag(25009010, OFF);
    SetEventFlag(25009011, OFF);
    SetEventFlag(25009012, OFF);
    SetEventFlag(25009013, OFF);
    SetEventFlag(25009014, OFF);
    SetEventFlag(25009015, OFF);
    SetEventFlag(25009016, OFF);
    SetEventFlag(25009017, OFF);
    SetEventFlag(25009018, OFF);
    SetEventFlag(25009019, OFF);
    SetEventFlag(25009020, OFF);
    SetEventFlag(25009021, OFF);
    SetEventFlag(25009022, OFF);
    SetEventFlag(25009023, OFF);
    SetEventFlag(25009024, OFF);
    SetEventFlag(25009025, OFF);
    SetEventFlag(25009026, OFF);
    SetEventFlag(25009027, OFF);
    SetEventFlag(25009028, OFF);
    SetEventFlag(25009029, OFF);
    SetEventFlag(25009030, OFF);
    SetEventFlag(25009031, OFF);
    SetEventFlag(25009032, OFF);
    SetEventFlag(25009033, OFF);
    SetEventFlag(25009034, OFF);
    SetEventFlag(25009035, OFF);
    SetEventFlag(25009036, OFF);
    SetEventFlag(25009037, OFF);
    SetEventFlag(25009038, OFF);
    SetEventFlag(25009039, OFF);
    SetEventFlag(25009040, OFF);
    RandomlySetEventFlagInRange(25009010, 25009040, ON);

    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009010);
    InitializeEvent(0, 15300110, 5300500);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009011);
    InitializeEvent(1, 15300110, 5300501);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009012);
    InitializeEvent(2, 15300110, 5300502);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009013);
    InitializeEvent(3, 15300110, 5300503);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009014);
    InitializeEvent(4, 15300110, 5300504);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009015);
    InitializeEvent(5, 15300110, 5300505);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009016);
    InitializeEvent(6, 15300110, 5300506);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009017);
    InitializeEvent(7, 15300110, 5300507);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009018);
    InitializeEvent(8, 15300110, 5300508);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009019);
    InitializeEvent(9, 15300110, 5300509);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009020);
    InitializeEvent(10, 15300110, 5300510);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009021);
    InitializeEvent(11, 15300110, 5300511);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009022);
    InitializeEvent(12, 15300110, 5300512);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009023);
    InitializeEvent(13, 15300110, 5300513);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009024);
    InitializeEvent(14, 15300110, 5300514);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009025);
    InitializeEvent(15, 15300110, 5300515);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009026);
    InitializeEvent(16, 15300110, 5300516);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009027);
    InitializeEvent(17, 15300110, 5300517);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009028);
    InitializeEvent(18, 15300110, 5300518);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009029);
    InitializeEvent(19, 15300110, 5300519);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009030);
    InitializeEvent(20, 15300110, 5300520);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009031);
    InitializeEvent(21, 15300110, 5300521);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009032);
    InitializeEvent(22, 15300110, 5300522);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009033);
    InitializeEvent(23, 15300110, 5300523);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009034);
    InitializeEvent(24, 15300110, 5300524);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009035);
    InitializeEvent(25, 15300110, 5300525);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009036);
    InitializeEvent(26, 15300110, 5300526);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009037);
    InitializeEvent(27, 15300110, 5300527);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009038);
    InitializeEvent(28, 15300110, 5300528);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009039);
    InitializeEvent(29, 15300110, 5300529);
    
    SkipIfEventFlag(1, OFF, TargetEventFlagType.EventFlag, 25009040);
    InitializeEvent(30, 15300110, 5300530);
});

// Wave
Event(15300110, Default, function(X0_4) {
    DeactivateGenerator(X0_4, Enabled);
    WaitFixedTimeSeconds(60.0);
    DeactivateGenerator(X0_4, Disabled);
    DisplayGenericDialog(99003011, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
    SetSpeffect(10000, 260200000); // Soul Boost
    SetSpeffect(10000, 260200001); // Item Discovery Boost
    WaitFixedTimeSeconds(25.0);
    DisplayGenericDialog(99003012, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 5.0);
});
