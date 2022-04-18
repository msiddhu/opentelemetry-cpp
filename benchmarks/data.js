window.BENCHMARK_DATA = {
  "lastUpdate": 1650297061247,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-cpp",
  "entries": {
    "OpenTelemetry-cpp api Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9713371225275436,
            "unit": "ns/iter",
            "extra": "iterations: 73631893\ncpu: 1.969711684582114 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9849431718590052,
            "unit": "ns/iter",
            "extra": "iterations: 70701000\ncpu: 1.982293036873595 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.455751419067383,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 10.303239999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9770779038620534,
            "unit": "ns/iter",
            "extra": "iterations: 71351395\ncpu: 1.9682264095887683 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.024459759060775,
            "unit": "ns/iter",
            "extra": "iterations: 2323050\ncpu: 59.86625341684424 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 345.8781927771802,
            "unit": "ns/iter",
            "extra": "iterations: 404643\ncpu: 345.7282098046921 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1118.4829147396417,
            "unit": "ns/iter",
            "extra": "iterations: 117985\ncpu: 1116.8411238716787 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 273.3894446032108,
            "unit": "ns/iter",
            "extra": "iterations: 584319\ncpu: 253.6340594777854 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1118.3607307388927,
            "unit": "ns/iter",
            "extra": "iterations: 130436\ncpu: 1114.0229691189547 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.41814499500534297,
            "unit": "ms/iter",
            "extra": "iterations: 382\ncpu: 0.12470994764397908 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24549543422504064,
            "unit": "ms/iter",
            "extra": "iterations: 548\ncpu: 0.24040200729927005 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11842958047532996,
            "unit": "ms/iter",
            "extra": "iterations: 1217\ncpu: 0.11616318816762534 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24462128024932753,
            "unit": "ms/iter",
            "extra": "iterations: 562\ncpu: 0.23970320284697513 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12417002871331674,
            "unit": "ms/iter",
            "extra": "iterations: 1139\ncpu: 0.12166707638279192 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24542747954491478,
            "unit": "ms/iter",
            "extra": "iterations: 551\ncpu: 0.24044936479128864 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.99993371963501,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 6.977584999999992 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.528785705566406,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.46837999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4174.50993858881,
            "unit": "ns/iter",
            "extra": "iterations: 32956\ncpu: 4168.4458065299195 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8549879147370685,
            "unit": "ns/iter",
            "extra": "iterations: 76820509\ncpu: 1.8509262936542115 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 85279.2461110723,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 85127.41055184967 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.8639457452441763,
            "unit": "ns/iter",
            "extra": "iterations: 76300515\ncpu: 1.8615510000161863 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 761.6070541831026,
            "unit": "ns/iter",
            "extra": "iterations: 180514\ncpu: 759.6075650642056 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18769.334008566573,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 18746.368335146894 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3131.4073063655583,
            "unit": "ns/iter",
            "extra": "iterations: 44453\ncpu: 3127.9598677254635 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 53809.26044305898,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 53724.92319508448 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081177795,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.035417355594864,
            "unit": "ns/iter",
            "extra": "iterations: 68957365\ncpu: 2.0305474259348513 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.038682292862635,
            "unit": "ns/iter",
            "extra": "iterations: 68896282\ncpu: 2.0323839826363925 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.785231145489012,
            "unit": "ns/iter",
            "extra": "iterations: 13011031\ncpu: 10.759693063524326 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.414909333857145,
            "unit": "ns/iter",
            "extra": "iterations: 67771668\ncpu: 2.0696303357916475 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.50991624204668,
            "unit": "ns/iter",
            "extra": "iterations: 2204547\ncpu: 63.49494930250978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 378.06999423791956,
            "unit": "ns/iter",
            "extra": "iterations: 370181\ncpu: 378.0639741099623 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1202.9954670102647,
            "unit": "ns/iter",
            "extra": "iterations: 116557\ncpu: 1201.7390632909226 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.80890852182966,
            "unit": "ns/iter",
            "extra": "iterations: 506705\ncpu: 276.69867082424685 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1136.069193061752,
            "unit": "ns/iter",
            "extra": "iterations: 123206\ncpu: 1136.011233219161 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4422.375999075199,
            "unit": "ns/iter",
            "extra": "iterations: 31677\ncpu: 4408.447769675158 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9588533470909715,
            "unit": "ns/iter",
            "extra": "iterations: 72215201\ncpu: 1.940210621306725 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 89800.17535540523,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 89376.65816326531 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9406738168274502,
            "unit": "ns/iter",
            "extra": "iterations: 72231595\ncpu: 1.9392552524971935 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 811.7549718823063,
            "unit": "ns/iter",
            "extra": "iterations: 175601\ncpu: 810.3404878104338 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20312.35362848978,
            "unit": "ns/iter",
            "extra": "iterations: 6922\ncpu: 20253.49609939322 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3290.5788329963652,
            "unit": "ns/iter",
            "extra": "iterations: 42655\ncpu: 3273.5576134099174 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56246.80492336882,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 55999.157979150004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1306999741109697,
            "unit": "ms/iter",
            "extra": "iterations: 1049\ncpu: 0.12661877979027647 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.26043438820089876,
            "unit": "ms/iter",
            "extra": "iterations: 522\ncpu: 0.2510716475095785 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12984431067178415,
            "unit": "ms/iter",
            "extra": "iterations: 1075\ncpu: 0.12671823255813955 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2552961736536113,
            "unit": "ms/iter",
            "extra": "iterations: 547\ncpu: 0.24882157221206588 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13323357577697473,
            "unit": "ms/iter",
            "extra": "iterations: 1085\ncpu: 0.12646792626728112 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.25457830677245186,
            "unit": "ms/iter",
            "extra": "iterations: 538\ncpu: 0.24799739776951682 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.3459524857370475,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.285089473684202 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.41224479675293,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.33347999999998 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643217084900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.829701319634693,
            "unit": "ns/iter",
            "extra": "iterations: 49172324\ncpu: 2.812887184262432 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.403808459117884,
            "unit": "ns/iter",
            "extra": "iterations: 61647123\ncpu: 2.3925852955051936 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.575232914833586,
            "unit": "ns/iter",
            "extra": "iterations: 13275553\ncpu: 10.544796137682551 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3710225319448957,
            "unit": "ns/iter",
            "extra": "iterations: 60337025\ncpu: 2.3356720023899107 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 88.22113193950163,
            "unit": "ns/iter",
            "extra": "iterations: 2237244\ncpu: 61.79942822508408 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 361.4483495910835,
            "unit": "ns/iter",
            "extra": "iterations: 389472\ncpu: 361.3828465204174 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1169.648386164583,
            "unit": "ns/iter",
            "extra": "iterations: 122319\ncpu: 1167.8725300239537 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.9173606044883,
            "unit": "ns/iter",
            "extra": "iterations: 469235\ncpu: 276.90602789646977 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1086.7818530986826,
            "unit": "ns/iter",
            "extra": "iterations: 132339\ncpu: 1073.225579761068 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4251.039431895317,
            "unit": "ns/iter",
            "extra": "iterations: 33159\ncpu: 4240.2002472933455 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.620136679150258,
            "unit": "ns/iter",
            "extra": "iterations: 54638411\ncpu: 2.6081596699435496 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 83254.45140066322,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 83091.77914110426 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.423414392180966,
            "unit": "ns/iter",
            "extra": "iterations: 60129450\ncpu: 2.417261425141922 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 748.2573400043215,
            "unit": "ns/iter",
            "extra": "iterations: 184108\ncpu: 746.3472526995026 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17949.473770288892,
            "unit": "ns/iter",
            "extra": "iterations: 6941\ncpu: 17432.51692839647 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3063.1555530764563,
            "unit": "ns/iter",
            "extra": "iterations: 46664\ncpu: 3058.58477627293 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 61596.11305905954,
            "unit": "ns/iter",
            "extra": "iterations: 2497\ncpu: 61477.092511013274 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.2855494327503792,
            "unit": "ms/iter",
            "extra": "iterations: 461\ncpu: 0.1526236442516269 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.4627482318655872,
            "unit": "ms/iter",
            "extra": "iterations: 429\ncpu: 0.3408344988344989 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.3618071065146542,
            "unit": "ms/iter",
            "extra": "iterations: 845\ncpu: 0.15467408284023673 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.35205437986419613,
            "unit": "ms/iter",
            "extra": "iterations: 459\ncpu: 0.30811220043572984 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.27893180634650017,
            "unit": "ms/iter",
            "extra": "iterations: 359\ncpu: 0.1540782729805012 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.33621149738942546,
            "unit": "ms/iter",
            "extra": "iterations: 381\ncpu: 0.29416115485564287 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 10.01443862915039,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 7.703540000000008 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.318641662597656,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.310159999999975 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2",
          "message": "Prepare for 1.2.0 release (#1188)",
          "timestamp": "2022-02-01T11:58:47-08:00",
          "tree_id": "0dac4978a6de140a9ef209e3b12c97501a37329d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2"
        },
        "date": 1643746256468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0344050585992126,
            "unit": "ns/iter",
            "extra": "iterations: 68918666\ncpu: 2.015697750156685 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0077066671082604,
            "unit": "ns/iter",
            "extra": "iterations: 70410139\ncpu: 2.005955420710077 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.722611983141238,
            "unit": "ns/iter",
            "extra": "iterations: 13032227\ncpu: 10.6320968779933 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.0708184874913083,
            "unit": "ns/iter",
            "extra": "iterations: 68863071\ncpu: 2.011291363988109 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 65.90791150928014,
            "unit": "ns/iter",
            "extra": "iterations: 2214990\ncpu: 63.61437297685317 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 382.8578927323167,
            "unit": "ns/iter",
            "extra": "iterations: 366997\ncpu: 379.75215056253876 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1210.4802018357932,
            "unit": "ns/iter",
            "extra": "iterations: 116037\ncpu: 1201.7804665753165 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 288.7292784087512,
            "unit": "ns/iter",
            "extra": "iterations: 490000\ncpu: 285.7214285714287 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1149.8364145535486,
            "unit": "ns/iter",
            "extra": "iterations: 122802\ncpu: 1131.7217960619541 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4380.663284674274,
            "unit": "ns/iter",
            "extra": "iterations: 31827\ncpu: 4373.8021176988095 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9385083224551196,
            "unit": "ns/iter",
            "extra": "iterations: 72131857\ncpu: 1.9366657924805684 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 88116.30171616771,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 87834.24223208624 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9494731555336147,
            "unit": "ns/iter",
            "extra": "iterations: 72911350\ncpu: 1.923865077247919 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 784.0471214561861,
            "unit": "ns/iter",
            "extra": "iterations: 180188\ncpu: 782.8234954602967 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20313.910105102434,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 20087.265376840893 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3266.195384104937,
            "unit": "ns/iter",
            "extra": "iterations: 44377\ncpu: 3261.0856975460233 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 65647.65704976262,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 55130.55444754694 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.8355248181117063,
            "unit": "ms/iter",
            "extra": "iterations: 173\ncpu: 0.13651098265895956 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.5826679435936181,
            "unit": "ms/iter",
            "extra": "iterations: 370\ncpu: 0.25519945945945943 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.5571181957538311,
            "unit": "ms/iter",
            "extra": "iterations: 260\ncpu: 0.13453153846153842 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.19476318359375,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.36604 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.49034542507595485,
            "unit": "ms/iter",
            "extra": "iterations: 225\ncpu: 0.1328222222222222 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.3277220726013184,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.4752380000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 33.80290667215983,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 7.697600000000008 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 58.45087766647339,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 29.798200000000012 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hamed0381@gmail.com",
            "name": "Hamed Mansouri",
            "username": "hamedprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a320739a46000dfedba7d7a8ba60119d2a6dc5f7",
          "message": "Update GettingStarted.rst (#1189)",
          "timestamp": "2022-02-02T13:58:45-08:00",
          "tree_id": "9a560ec05ec795317cff1ee6e6f328f6923fdf3d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a320739a46000dfedba7d7a8ba60119d2a6dc5f7"
        },
        "date": 1643839937664,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.5093154789474905,
            "unit": "ns/iter",
            "extra": "iterations: 50564517\ncpu: 2.8529195680836823 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.581691591186516,
            "unit": "ns/iter",
            "extra": "iterations: 49045367\ncpu: 2.588162914552153 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 15.055647518180631,
            "unit": "ns/iter",
            "extra": "iterations: 13364390\ncpu: 10.825080680824188 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.1572477051898797,
            "unit": "ns/iter",
            "extra": "iterations: 58952581\ncpu: 2.29578922083157 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.89867675780558,
            "unit": "ns/iter",
            "extra": "iterations: 2116972\ncpu: 60.78313742458569 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 383.22753111860226,
            "unit": "ns/iter",
            "extra": "iterations: 377633\ncpu: 381.7521244170928 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1173.9135904751486,
            "unit": "ns/iter",
            "extra": "iterations: 120145\ncpu: 1172.5207041491535 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 267.4728520797355,
            "unit": "ns/iter",
            "extra": "iterations: 527283\ncpu: 266.8381116023085 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1127.6354971402736,
            "unit": "ns/iter",
            "extra": "iterations: 128587\ncpu: 1125.5725695443546 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5586.831925339821,
            "unit": "ns/iter",
            "extra": "iterations: 30963\ncpu: 4314.226657623615 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.2049225754952646,
            "unit": "ns/iter",
            "extra": "iterations: 51885674\ncpu: 2.743524156590893 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 118610.02931026829,
            "unit": "ns/iter",
            "extra": "iterations: 1595\ncpu: 87436.23824451411 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.573087348228322,
            "unit": "ns/iter",
            "extra": "iterations: 50535496\ncpu: 2.6991424008186264 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1031.013874296247,
            "unit": "ns/iter",
            "extra": "iterations: 186081\ncpu: 754.5284042970537 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 23230.67273459243,
            "unit": "ns/iter",
            "extra": "iterations: 7276\ncpu: 18067.413413963706 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3161.7332457120315,
            "unit": "ns/iter",
            "extra": "iterations: 44364\ncpu: 3146.652691371381 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56070.188918375454,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 55966.86555290374 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1590362616947719,
            "unit": "ms/iter",
            "extra": "iterations: 840\ncpu: 0.15561500000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.32970854335612754,
            "unit": "ms/iter",
            "extra": "iterations: 421\ncpu: 0.31823111638954876 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.18764373201590318,
            "unit": "ms/iter",
            "extra": "iterations: 832\ncpu: 0.17722680288461545 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3310418823390331,
            "unit": "ms/iter",
            "extra": "iterations: 412\ncpu: 0.323079854368932 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.163787722853085,
            "unit": "ms/iter",
            "extra": "iterations: 898\ncpu: 0.16027082405345217 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.30809187553298306,
            "unit": "ms/iter",
            "extra": "iterations: 355\ncpu: 0.30238253521126773 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.9709062576293945,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 6.939695000000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.850055694580078,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.791140000000023 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dupadhya@redhat.com",
            "name": "Deepika Upadhyay",
            "username": "ideepika"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9127fc49dbe63b6f37ead0e158bdb0b78a6b984",
          "message": "cmake: thrift requires boost headers, include them as Boost_INCLUDE_DIRS (#1100)",
          "timestamp": "2022-02-04T10:43:33-08:00",
          "tree_id": "0e7d81535f83b70283f422d9e187c9f58e5cf975",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e9127fc49dbe63b6f37ead0e158bdb0b78a6b984"
        },
        "date": 1644000903651,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3684.464684806684,
            "unit": "ns/iter",
            "extra": "iterations: 38088\ncpu: 3682.3015122873353 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.617021671432585,
            "unit": "ns/iter",
            "extra": "iterations: 86624551\ncpu: 1.6159102515867585 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74438.73492522351,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 74326.8577494692 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6169463354277098,
            "unit": "ns/iter",
            "extra": "iterations: 86659404\ncpu: 1.615552306360197 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 672.8967867079785,
            "unit": "ns/iter",
            "extra": "iterations: 211931\ncpu: 672.062605281908 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16938.721728201683,
            "unit": "ns/iter",
            "extra": "iterations: 8321\ncpu: 16890.313664223046 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2718.995133117253,
            "unit": "ns/iter",
            "extra": "iterations: 51396\ncpu: 2718.157055023737 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46350.42587995291,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 46325.157859754065 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 55.33962965668708,
            "unit": "ns/iter",
            "extra": "iterations: 2533992\ncpu: 55.245833451723605 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.4356172283638,
            "unit": "ns/iter",
            "extra": "iterations: 442328\ncpu: 316.7441355736015 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1042.4418281427045,
            "unit": "ns/iter",
            "extra": "iterations: 138559\ncpu: 1010.7932360943711 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.53638511876906,
            "unit": "ns/iter",
            "extra": "iterations: 605714\ncpu: 230.93572213949142 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 952.945296580664,
            "unit": "ns/iter",
            "extra": "iterations: 147495\ncpu: 948.9040306451062 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7048012770976169,
            "unit": "ns/iter",
            "extra": "iterations: 83145760\ncpu: 1.684641525917858 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.74442913330324,
            "unit": "ns/iter",
            "extra": "iterations: 82647068\ncpu: 1.6928586020740626 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.993289804735605,
            "unit": "ns/iter",
            "extra": "iterations: 15630879\ncpu: 8.960084714365712 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.701385362281182,
            "unit": "ns/iter",
            "extra": "iterations: 81403395\ncpu: 1.695049696637345 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1096113814109283,
            "unit": "ms/iter",
            "extra": "iterations: 1146\ncpu: 0.10659432809773126 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21455467941213646,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.2093620955315871 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10957754859628603,
            "unit": "ms/iter",
            "extra": "iterations: 1290\ncpu: 0.10706116279069766 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21528204282124838,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 0.21015848765432096 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10891370677283159,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10643524399690157 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2145194125653048,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.20954391371340533 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 10.680447925220836,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.556872727272724 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.57826042175293,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.554900000000025 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1b4a49f9b673cbdce4b992ae8fc712e49c39c50",
          "message": "disable failing test (#1193)",
          "timestamp": "2022-02-04T11:52:45-08:00",
          "tree_id": "ed584794fbdf5a6eb267184582f6fa13e64001f2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1b4a49f9b673cbdce4b992ae8fc712e49c39c50"
        },
        "date": 1644005084327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4454.390666069996,
            "unit": "ns/iter",
            "extra": "iterations: 38024\ncpu: 3557.0139911634756 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.5935084875968184,
            "unit": "ns/iter",
            "extra": "iterations: 68437905\ncpu: 2.126216458554657 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 89253.48363918373,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 71717.78593913955 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.5899803687761187,
            "unit": "ns/iter",
            "extra": "iterations: 66934084\ncpu: 2.0871922292983047 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 733.1112875949027,
            "unit": "ns/iter",
            "extra": "iterations: 225566\ncpu: 596.162985556334 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19702.69225292353,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 14974.217161447725 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3022.2746862528684,
            "unit": "ns/iter",
            "extra": "iterations: 55796\ncpu: 2527.3119936913067 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 63172.4561134948,
            "unit": "ns/iter",
            "extra": "iterations: 3041\ncpu: 46429.49687602763 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 58.592755282387685,
            "unit": "ns/iter",
            "extra": "iterations: 2564281\ncpu: 58.1717448282774 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 325.5605435480375,
            "unit": "ns/iter",
            "extra": "iterations: 422903\ncpu: 324.3653982118831 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1019.7405524852344,
            "unit": "ns/iter",
            "extra": "iterations: 137841\ncpu: 1018.8347443793934 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 229.80113574470755,
            "unit": "ns/iter",
            "extra": "iterations: 600650\ncpu: 228.9176725214352 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.4182604871754,
            "unit": "ns/iter",
            "extra": "iterations: 138447\ncpu: 953.4110526049677 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0803943169644903,
            "unit": "ns/iter",
            "extra": "iterations: 62187950\ncpu: 2.073818159305782 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1401175423466827,
            "unit": "ns/iter",
            "extra": "iterations: 64173966\ncpu: 2.136003250913307 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.02476527364041,
            "unit": "ns/iter",
            "extra": "iterations: 16553707\ncpu: 9.01224722655777 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8462228878727789,
            "unit": "ns/iter",
            "extra": "iterations: 75550711\ncpu: 1.8427635975523782 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12480520725703943,
            "unit": "ms/iter",
            "extra": "iterations: 1051\ncpu: 0.1223418648905804 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2742754785638106,
            "unit": "ms/iter",
            "extra": "iterations: 532\ncpu: 0.26298214285714283 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12890917371468716,
            "unit": "ms/iter",
            "extra": "iterations: 1004\ncpu: 0.12661643426294825 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25248124111323994,
            "unit": "ms/iter",
            "extra": "iterations: 591\ncpu: 0.24663502538071072 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13191056397794945,
            "unit": "ms/iter",
            "extra": "iterations: 978\ncpu: 0.12950971370143144 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24916807236654234,
            "unit": "ms/iter",
            "extra": "iterations: 554\ncpu: 0.2443380866425992 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.978238582611084,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 5.960779999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.475223859151203,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.358733333333348 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6a28df5c46810728c1eb17ca797391695628e64",
          "message": "Metrics SDK: Filtering metrics attributes (#1191)",
          "timestamp": "2022-02-04T18:46:06-08:00",
          "tree_id": "ddcd8770b365e437fd35a082e33825bf256b751f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b6a28df5c46810728c1eb17ca797391695628e64"
        },
        "date": 1644030046760,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4575.7352352345115,
            "unit": "ns/iter",
            "extra": "iterations: 30569\ncpu: 4570.028460204782 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.772525497579765,
            "unit": "ns/iter",
            "extra": "iterations: 51107014\ncpu: 2.7547510406301576 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 95697.6781038343,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 91839.07563025213 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.717370612744186,
            "unit": "ns/iter",
            "extra": "iterations: 52174172\ncpu: 2.684776674558438 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 797.4833581281193,
            "unit": "ns/iter",
            "extra": "iterations: 184895\ncpu: 794.0360745287857 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18936.214072242445,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 18893.30080443098 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3289.6118573635517,
            "unit": "ns/iter",
            "extra": "iterations: 41726\ncpu: 3286.588697694484 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60579.799160195864,
            "unit": "ns/iter",
            "extra": "iterations: 2342\ncpu: 60075.619128949664 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 66.59572354861722,
            "unit": "ns/iter",
            "extra": "iterations: 1914216\ncpu: 66.44203162025603 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 413.83696692227187,
            "unit": "ns/iter",
            "extra": "iterations: 350777\ncpu: 395.69156472630766 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1251.3893709299268,
            "unit": "ns/iter",
            "extra": "iterations: 111794\ncpu: 1247.575004025261 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 304.7212662230927,
            "unit": "ns/iter",
            "extra": "iterations: 441844\ncpu: 304.0276658730231 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1242.2698723887231,
            "unit": "ns/iter",
            "extra": "iterations: 121597\ncpu: 1240.091449624579 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.8008025499325058,
            "unit": "ns/iter",
            "extra": "iterations: 47881418\ncpu: 2.7882340493758977 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0655690263710857,
            "unit": "ns/iter",
            "extra": "iterations: 46757532\ncpu: 3.041169923168742 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.031276583970092,
            "unit": "ns/iter",
            "extra": "iterations: 12682768\ncpu: 11.017681629120709 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3642816988798074,
            "unit": "ns/iter",
            "extra": "iterations: 59337371\ncpu: 2.3468498461113163 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.17892227971495078,
            "unit": "ms/iter",
            "extra": "iterations: 812\ncpu: 0.17352475369458126 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.34110524535718545,
            "unit": "ms/iter",
            "extra": "iterations: 442\ncpu: 0.3339576923076923 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.167197422172784,
            "unit": "ms/iter",
            "extra": "iterations: 867\ncpu: 0.16246078431372551 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3211546917350925,
            "unit": "ms/iter",
            "extra": "iterations: 392\ncpu: 0.3151811224489798 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1757673794131199,
            "unit": "ms/iter",
            "extra": "iterations: 834\ncpu: 0.1732622302158274 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.33209198399593953,
            "unit": "ms/iter",
            "extra": "iterations: 437\ncpu: 0.3233016018306634 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.75048467848036,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 7.685961111111109 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.466440200805664,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.466999999999995 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644041055994,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3695.8751929811497,
            "unit": "ns/iter",
            "extra": "iterations: 37867\ncpu: 3690.366281986954 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6209962082898073,
            "unit": "ns/iter",
            "extra": "iterations: 86626159\ncpu: 1.6168822630124928 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 81161.82742088335,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 75301.27931769722 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.240383938466136,
            "unit": "ns/iter",
            "extra": "iterations: 83756603\ncpu: 1.689638726155118 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1851.2268069502627,
            "unit": "ns/iter",
            "extra": "iterations: 197118\ncpu: 755.4728639698051 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17101.97491444982,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 16984.183738389114 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2720.6507040608913,
            "unit": "ns/iter",
            "extra": "iterations: 51192\ncpu: 2719.4073292701996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46678.65543799547,
            "unit": "ns/iter",
            "extra": "iterations: 2988\ncpu: 46626.90763052206 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.14558318284267,
            "unit": "ns/iter",
            "extra": "iterations: 2644293\ncpu: 52.918606221020134 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.70388376722883,
            "unit": "ns/iter",
            "extra": "iterations: 443293\ncpu: 315.6846600329804 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 999.7443136236994,
            "unit": "ns/iter",
            "extra": "iterations: 140003\ncpu: 999.7357199488584 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.425433611312,
            "unit": "ns/iter",
            "extra": "iterations: 607057\ncpu: 230.4086766152109 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 946.0300716727521,
            "unit": "ns/iter",
            "extra": "iterations: 147962\ncpu: 945.743501709898 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.727372434427684,
            "unit": "ns/iter",
            "extra": "iterations: 81292316\ncpu: 1.718280482991775 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7199886324516493,
            "unit": "ns/iter",
            "extra": "iterations: 81470662\ncpu: 1.7164436444618554 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.096976825161134,
            "unit": "ns/iter",
            "extra": "iterations: 15593118\ncpu: 8.96333882678243 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7048537608654644,
            "unit": "ns/iter",
            "extra": "iterations: 81995057\ncpu: 1.7017135557330005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11017736514664923,
            "unit": "ms/iter",
            "extra": "iterations: 1244\ncpu: 0.10633987138263666 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3407339967915123,
            "unit": "ms/iter",
            "extra": "iterations: 641\ncpu: 0.21260499219968798 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1948637032658799,
            "unit": "ms/iter",
            "extra": "iterations: 1272\ncpu: 0.10824481132075474 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.22983402013778687,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 0.21426343749999996 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1104881010752629,
            "unit": "ms/iter",
            "extra": "iterations: 1286\ncpu: 0.10710847589424577 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2912494623772452,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.2133420560747664 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.40150633725253,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.392636363636365 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.6960391998291,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.533939999999998 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644439713211,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4588.333479710169,
            "unit": "ns/iter",
            "extra": "iterations: 31405\ncpu: 4549.6449609934725 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9478813299315976,
            "unit": "ns/iter",
            "extra": "iterations: 71763958\ncpu: 1.9448885469778576 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 118982.35548897745,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 91595.43994861915 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9460726728386162,
            "unit": "ns/iter",
            "extra": "iterations: 73322614\ncpu: 1.9406918580398675 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 804.846012958373,
            "unit": "ns/iter",
            "extra": "iterations: 170384\ncpu: 801.2360315522586 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 24897.607032763608,
            "unit": "ns/iter",
            "extra": "iterations: 6839\ncpu: 20524.360286591615 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3908.828155555918,
            "unit": "ns/iter",
            "extra": "iterations: 42187\ncpu: 3281.072368265102 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 69240.92190936931,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 56318.32524271841 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 64.0785724100856,
            "unit": "ns/iter",
            "extra": "iterations: 2128216\ncpu: 63.96864791919617 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 376.3878852848128,
            "unit": "ns/iter",
            "extra": "iterations: 366797\ncpu: 375.74543957556904 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1186.9486651981692,
            "unit": "ns/iter",
            "extra": "iterations: 117072\ncpu: 1185.2441232745664 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 274.3390619476565,
            "unit": "ns/iter",
            "extra": "iterations: 518653\ncpu: 272.3337183049169 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1125.2365717960854,
            "unit": "ns/iter",
            "extra": "iterations: 122190\ncpu: 1123.5125624028155 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.5061694086085233,
            "unit": "ns/iter",
            "extra": "iterations: 70413680\ncpu: 2.0249559460604813 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.8799397234802933,
            "unit": "ns/iter",
            "extra": "iterations: 68574675\ncpu: 2.0519470197999485 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 14.095063620754992,
            "unit": "ns/iter",
            "extra": "iterations: 13041818\ncpu: 10.724049361829772 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.882850581621454,
            "unit": "ns/iter",
            "extra": "iterations: 68700529\ncpu: 2.019863631617742 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.4438584524102019,
            "unit": "ms/iter",
            "extra": "iterations: 471\ncpu: 0.1377588110403397 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.46155637480675954,
            "unit": "ms/iter",
            "extra": "iterations: 271\ncpu: 0.2550055350553506 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.45503040708868625,
            "unit": "ms/iter",
            "extra": "iterations: 502\ncpu: 0.14003545816733062 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3252195275348166,
            "unit": "ms/iter",
            "extra": "iterations: 460\ncpu: 0.25425304347826105 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.5566352426749954,
            "unit": "ms/iter",
            "extra": "iterations: 466\ncpu: 0.13647467811158778 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5106142589024135,
            "unit": "ms/iter",
            "extra": "iterations: 280\ncpu: 0.27831642857142863 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 26.73490047454834,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 9.930309999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 51.793416341145836,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 34.49356666666666 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04e3a68263a90ac0fef822fc1f87196b9c59c545",
          "message": "Sync and Async Instruments SDK (#1184)",
          "timestamp": "2022-02-09T22:27:55-08:00",
          "tree_id": "790993870b48f156a444c412c9953d597451c9e8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/04e3a68263a90ac0fef822fc1f87196b9c59c545"
        },
        "date": 1644475124504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4422.258192945055,
            "unit": "ns/iter",
            "extra": "iterations: 37571\ncpu: 3709.8826222352345 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8548254035250067,
            "unit": "ns/iter",
            "extra": "iterations: 86661550\ncpu: 1.6161031045486725 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 104538.31900754289,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 74883.25307651151 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.1379976761681587,
            "unit": "ns/iter",
            "extra": "iterations: 86394155\ncpu: 1.6204556893924131 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 856.6055318908584,
            "unit": "ns/iter",
            "extra": "iterations: 210146\ncpu: 662.1553586554112 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22119.044678179347,
            "unit": "ns/iter",
            "extra": "iterations: 8230\ncpu: 16985.151883353574 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2755.2935602994053,
            "unit": "ns/iter",
            "extra": "iterations: 50965\ncpu: 2734.8042774453033 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 62538.00500378271,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 46457.51001335106 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.02364275919308,
            "unit": "ns/iter",
            "extra": "iterations: 2641714\ncpu: 52.96890579373847 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.46158494185755,
            "unit": "ns/iter",
            "extra": "iterations: 443037\ncpu: 315.8257662452571 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1010.3472777567838,
            "unit": "ns/iter",
            "extra": "iterations: 139838\ncpu: 1000.0829531314805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.71218342031074,
            "unit": "ns/iter",
            "extra": "iterations: 607370\ncpu: 230.36682746925274 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.6512768236765,
            "unit": "ns/iter",
            "extra": "iterations: 148133\ncpu: 945.06355774878 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6912439973909918,
            "unit": "ns/iter",
            "extra": "iterations: 83132924\ncpu: 1.686758906735916 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7365025134577672,
            "unit": "ns/iter",
            "extra": "iterations: 82742317\ncpu: 1.6941983870236557 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.980247232374087,
            "unit": "ns/iter",
            "extra": "iterations: 15636483\ncpu: 8.95348397718336 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6887545853616732,
            "unit": "ns/iter",
            "extra": "iterations: 83216929\ncpu: 1.6853746189071694 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1100771010868133,
            "unit": "ms/iter",
            "extra": "iterations: 1260\ncpu: 0.10743396825396827 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2160931526219789,
            "unit": "ms/iter",
            "extra": "iterations: 641\ncpu: 0.21036349453978156 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11400987231542194,
            "unit": "ms/iter",
            "extra": "iterations: 1260\ncpu: 0.10798523809523809 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21891902994226525,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 0.21170864197530875 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11049690575951497,
            "unit": "ms/iter",
            "extra": "iterations: 1274\ncpu: 0.10753908948194667 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2172659208745132,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 0.2113697530864199 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.437355821782893,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.412990909090905 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.667095184326172,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.604419999999983 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4",
          "message": "Benchmark documentation (#1205)",
          "timestamp": "2022-02-11T21:23:30-08:00",
          "tree_id": "ec08c9f6ed7b2efa77f3ed004f3b8b7e0c50c6f7",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4"
        },
        "date": 1644644007216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3673.959647518051,
            "unit": "ns/iter",
            "extra": "iterations: 38130\ncpu: 3671.5106215578285 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6229496404608104,
            "unit": "ns/iter",
            "extra": "iterations: 86794254\ncpu: 1.613107936845681 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74401.5374084894,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 74305.78863515668 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.665315628007329,
            "unit": "ns/iter",
            "extra": "iterations: 86719524\ncpu: 1.615019242956176 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 660.822102136091,
            "unit": "ns/iter",
            "extra": "iterations: 211803\ncpu: 659.5307904042908 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16946.239847584147,
            "unit": "ns/iter",
            "extra": "iterations: 8316\ncpu: 16903.451178451178 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2736.2663290243195,
            "unit": "ns/iter",
            "extra": "iterations: 51102\ncpu: 2733.705138742123 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46506.24105827843,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 46449.75008330554 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.869787123922656,
            "unit": "ns/iter",
            "extra": "iterations: 2645803\ncpu: 52.86958250481991 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.31064479863096,
            "unit": "ns/iter",
            "extra": "iterations: 440014\ncpu: 318.3094174276273 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1004.2282365505556,
            "unit": "ns/iter",
            "extra": "iterations: 139602\ncpu: 1003.9591123336348 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.4998467875993,
            "unit": "ns/iter",
            "extra": "iterations: 607312\ncpu: 230.49009405379766 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 949.4590830420523,
            "unit": "ns/iter",
            "extra": "iterations: 147455\ncpu: 949.3296259875892 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.1666976136763814,
            "unit": "ns/iter",
            "extra": "iterations: 83203081\ncpu: 1.7000824765130997 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3042878045101403,
            "unit": "ns/iter",
            "extra": "iterations: 82286144\ncpu: 1.7071598348319732 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.937917596446171,
            "unit": "ns/iter",
            "extra": "iterations: 15484413\ncpu: 9.026257566237739 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.307846870107449,
            "unit": "ns/iter",
            "extra": "iterations: 80477808\ncpu: 1.7043083479609686 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11048883343202154,
            "unit": "ms/iter",
            "extra": "iterations: 1246\ncpu: 0.11621115569823436 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21247183607272205,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.20717936267071319 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10803685827277411,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10555786212238578 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21257574699785067,
            "unit": "ms/iter",
            "extra": "iterations: 657\ncpu: 0.20730213089802144 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10758863218570325,
            "unit": "ms/iter",
            "extra": "iterations: 1299\ncpu: 0.10507490377213241 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21195115049371083,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.20664867807153953 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.510371253603981,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.503933333333329 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.670480728149414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.636139999999983 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644873480680,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3818.9046909258864,
            "unit": "ns/iter",
            "extra": "iterations: 36323\ncpu: 3806.5605814497703 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6161564002370228,
            "unit": "ns/iter",
            "extra": "iterations: 86541552\ncpu: 1.6160629982693173 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74747.53238348213,
            "unit": "ns/iter",
            "extra": "iterations: 1874\ncpu: 74740.12806830312 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6192066793798052,
            "unit": "ns/iter",
            "extra": "iterations: 86628839\ncpu: 1.6156213290587913 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 672.7080901701763,
            "unit": "ns/iter",
            "extra": "iterations: 212095\ncpu: 672.6971404323538 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16846.977362111837,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 16846.71068427371 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2730.165118779945,
            "unit": "ns/iter",
            "extra": "iterations: 51292\ncpu: 2729.661545660143 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46482.486591383604,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 46476.10796401204 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.122653060832896,
            "unit": "ns/iter",
            "extra": "iterations: 2640125\ncpu: 52.926736423464796 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.2368911244096,
            "unit": "ns/iter",
            "extra": "iterations: 442720\ncpu: 315.3964130827611 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1013.0478924636071,
            "unit": "ns/iter",
            "extra": "iterations: 139810\ncpu: 1002.0649452828837 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.6971281873619,
            "unit": "ns/iter",
            "extra": "iterations: 606772\ncpu: 230.46663326587256 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 973.6926581422563,
            "unit": "ns/iter",
            "extra": "iterations: 147827\ncpu: 947.4284129421553 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.696250487502862,
            "unit": "ns/iter",
            "extra": "iterations: 82712986\ncpu: 1.6936155587467245 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6973107647724295,
            "unit": "ns/iter",
            "extra": "iterations: 82667076\ncpu: 1.6940770954569628 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.98036881746025,
            "unit": "ns/iter",
            "extra": "iterations: 15607041\ncpu: 8.972809131468292 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6976284972751352,
            "unit": "ns/iter",
            "extra": "iterations: 82450912\ncpu: 1.6956440700134405 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10982514182223549,
            "unit": "ms/iter",
            "extra": "iterations: 1264\ncpu: 0.10648291139240507 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21670942948271224,
            "unit": "ms/iter",
            "extra": "iterations: 639\ncpu: 0.21141377151799692 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10889801324582567,
            "unit": "ms/iter",
            "extra": "iterations: 1275\ncpu: 0.10674149019607847 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2136573674667849,
            "unit": "ms/iter",
            "extra": "iterations: 653\ncpu: 0.20921822358346098 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10836436678705672,
            "unit": "ms/iter",
            "extra": "iterations: 1298\ncpu: 0.10616040061633275 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21316006278408411,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.20857201834862382 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.4213384281505235,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.419150000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.72166919708252,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.548250000000014 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15c6f33631d8cdf09b85911f35263449294d31a4",
          "message": "Update grpc to v1.43.2 to support VS2022/MSVC 19.30 and bazel 5.0 (#1207)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-02-14T20:24:58-08:00",
          "tree_id": "dff039d78807ee53fdc13748fd26ef7b48546fa8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/15c6f33631d8cdf09b85911f35263449294d31a4"
        },
        "date": 1644899780717,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3246.5005026282724,
            "unit": "ns/iter",
            "extra": "iterations: 43010\ncpu: 3244.8174843059755 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4260311381384319,
            "unit": "ns/iter",
            "extra": "iterations: 98231827\ncpu: 1.4252081456247372 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 65579.63334631451,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 65575.72633552016 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4455116887061863,
            "unit": "ns/iter",
            "extra": "iterations: 97924011\ncpu: 1.4252091859268314 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 595.5061206708248,
            "unit": "ns/iter",
            "extra": "iterations: 239598\ncpu: 594.6969507257988 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14895.739717624048,
            "unit": "ns/iter",
            "extra": "iterations: 9433\ncpu: 14879.338492526243 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2443.9722808222336,
            "unit": "ns/iter",
            "extra": "iterations: 57361\ncpu: 2418.3295270305607 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 43953.877023619345,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 41123.040659988226 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 49.08131738390329,
            "unit": "ns/iter",
            "extra": "iterations: 2958905\ncpu: 46.7223516807738 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 281.16913071073577,
            "unit": "ns/iter",
            "extra": "iterations: 503132\ncpu: 278.18624138397087 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 884.4189161137906,
            "unit": "ns/iter",
            "extra": "iterations: 158573\ncpu: 882.9031424012913 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 203.13241086364582,
            "unit": "ns/iter",
            "extra": "iterations: 689516\ncpu: 203.04140875628698 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 835.7440171087883,
            "unit": "ns/iter",
            "extra": "iterations: 167584\ncpu: 835.0600295970974 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.4864158536254166,
            "unit": "ns/iter",
            "extra": "iterations: 94448455\ncpu: 1.4847971838184122 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.528935118134695,
            "unit": "ns/iter",
            "extra": "iterations: 93852022\ncpu: 1.492876733119293 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.945889123704839,
            "unit": "ns/iter",
            "extra": "iterations: 17716944\ncpu: 7.897727734534806 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.5306459376074664,
            "unit": "ns/iter",
            "extra": "iterations: 89370639\ncpu: 1.5263737792005716 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09657937896326133,
            "unit": "ms/iter",
            "extra": "iterations: 1441\ncpu: 0.09335433726578767 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.18999923844965233,
            "unit": "ms/iter",
            "extra": "iterations: 714\ncpu: 0.1849337535014006 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.09526518134091316,
            "unit": "ms/iter",
            "extra": "iterations: 1441\ncpu: 0.09327966689798753 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.18901568931221163,
            "unit": "ms/iter",
            "extra": "iterations: 745\ncpu: 0.18409140939597315 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.09509142822725794,
            "unit": "ms/iter",
            "extra": "iterations: 1459\ncpu: 0.0928088416723783 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.18736944403699649,
            "unit": "ms/iter",
            "extra": "iterations: 744\ncpu: 0.18263494623655915 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.783945322036743,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.769720833333334 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.792259852091473,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.740033333333333 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef3a623a3bedd3fded167bade625d7fa392d2b88",
          "message": "Add Aggregation Storage (#1213)",
          "timestamp": "2022-02-16T14:58:32-08:00",
          "tree_id": "6f402b660d2b4da4a41caf6a91b28f6e4601ec2e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/ef3a623a3bedd3fded167bade625d7fa392d2b88"
        },
        "date": 1645053075591,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3722.914705242119,
            "unit": "ns/iter",
            "extra": "iterations: 37736\ncpu: 3715.873436506254 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.7501033618009587,
            "unit": "ns/iter",
            "extra": "iterations: 86707171\ncpu: 1.6188026708886625 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74852.37121582031,
            "unit": "ns/iter",
            "extra": "iterations: 1875\ncpu: 74599.94666666671 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6200372385031865,
            "unit": "ns/iter",
            "extra": "iterations: 85606491\ncpu: 1.616062034361389 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 660.9792829169438,
            "unit": "ns/iter",
            "extra": "iterations: 211797\ncpu: 659.9640221532882 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17023.212801522044,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 16923.227825249716 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2725.253006761378,
            "unit": "ns/iter",
            "extra": "iterations: 51317\ncpu: 2723.6977999493347 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46578.30613068218,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 46535.42361574387 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.973786221823815,
            "unit": "ns/iter",
            "extra": "iterations: 2645753\ncpu: 52.86506336759328 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 324.6974537425533,
            "unit": "ns/iter",
            "extra": "iterations: 431635\ncpu: 324.4998667855944 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1009.0455245134852,
            "unit": "ns/iter",
            "extra": "iterations: 139035\ncpu: 1007.8944150753407 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.7284737820966,
            "unit": "ns/iter",
            "extra": "iterations: 605481\ncpu: 231.42922734156807 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 974.7251872392336,
            "unit": "ns/iter",
            "extra": "iterations: 147417\ncpu: 950.815034900995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.686770026346726,
            "unit": "ns/iter",
            "extra": "iterations: 82894191\ncpu: 1.686026467162217 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6925161127591941,
            "unit": "ns/iter",
            "extra": "iterations: 82781946\ncpu: 1.691197256947789 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.982894643646404,
            "unit": "ns/iter",
            "extra": "iterations: 15639784\ncpu: 8.952080156605742 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6912830277733835,
            "unit": "ns/iter",
            "extra": "iterations: 81351835\ncpu: 1.6903232729784152 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10965351059502763,
            "unit": "ms/iter",
            "extra": "iterations: 1265\ncpu: 0.10624395256916999 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2211678135502446,
            "unit": "ms/iter",
            "extra": "iterations: 555\ncpu: 0.2109873873873874 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10856539241313197,
            "unit": "ms/iter",
            "extra": "iterations: 1294\ncpu: 0.10637302936630604 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21343282316946874,
            "unit": "ms/iter",
            "extra": "iterations: 653\ncpu: 0.20872205206738123 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10943412780761719,
            "unit": "ms/iter",
            "extra": "iterations: 1303\ncpu: 0.10618127398311587 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21214266769758616,
            "unit": "ms/iter",
            "extra": "iterations: 655\ncpu: 0.20767358778625952 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.418401544744318,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.4079727272727265 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.64253807067871,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.546939999999996 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645086274798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6039.736089177541,
            "unit": "ns/iter",
            "extra": "iterations: 31592\ncpu: 4521.252215750823 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.6549192148967684,
            "unit": "ns/iter",
            "extra": "iterations: 71013361\ncpu: 1.9730920777007024 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 127365.426441503,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 92163.71391076113 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.735883633620769,
            "unit": "ns/iter",
            "extra": "iterations: 71373585\ncpu: 1.9752825922923722 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1151.922619468661,
            "unit": "ns/iter",
            "extra": "iterations: 172008\ncpu: 835.0669736291331 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 28057.951048987496,
            "unit": "ns/iter",
            "extra": "iterations: 6722\ncpu: 20816.944361797097 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4327.903651630663,
            "unit": "ns/iter",
            "extra": "iterations: 41516\ncpu: 3351.539165622891 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 75963.15159971415,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 56528.54251012153 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.789806584555485,
            "unit": "ns/iter",
            "extra": "iterations: 2203250\ncpu: 63.56723022807217 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 392.5332221972951,
            "unit": "ns/iter",
            "extra": "iterations: 365066\ncpu: 383.34410764081014 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1203.7096825593035,
            "unit": "ns/iter",
            "extra": "iterations: 116410\ncpu: 1201.6433296108582 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.4428669478885,
            "unit": "ns/iter",
            "extra": "iterations: 506435\ncpu: 276.3357587844443 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1138.769865934768,
            "unit": "ns/iter",
            "extra": "iterations: 123088\ncpu: 1137.0864747172752 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.2429779999757726,
            "unit": "ns/iter",
            "extra": "iterations: 64929042\ncpu: 2.134008076077882 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3064913902312156,
            "unit": "ns/iter",
            "extra": "iterations: 65751469\ncpu: 2.1700838349330263 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.747964631356774,
            "unit": "ns/iter",
            "extra": "iterations: 12666015\ncpu: 11.732482552720805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.371320416045701,
            "unit": "ns/iter",
            "extra": "iterations: 60879359\ncpu: 2.3530602547901327 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13059090079286806,
            "unit": "ms/iter",
            "extra": "iterations: 1057\ncpu: 0.12739479659413436 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2578348198860495,
            "unit": "ms/iter",
            "extra": "iterations: 537\ncpu: 0.25181452513966485 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13048786212963687,
            "unit": "ms/iter",
            "extra": "iterations: 1076\ncpu: 0.12785566914498142 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25676283644232556,
            "unit": "ms/iter",
            "extra": "iterations: 546\ncpu: 0.2511758241758242 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13000261048823183,
            "unit": "ms/iter",
            "extra": "iterations: 1087\ncpu: 0.12731545538178474 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.25679999535236886,
            "unit": "ms/iter",
            "extra": "iterations: 545\ncpu: 0.2505449541284403 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.2679645136783,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.250131578947365 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 29.311513900756836,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.211279999999995 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613",
          "message": "thrift boost deps (#1224)",
          "timestamp": "2022-02-18T16:18:32-08:00",
          "tree_id": "0c67ccc931501df9f7334a59aed794f05be921a2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613"
        },
        "date": 1645230975346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5105.492405443145,
            "unit": "ns/iter",
            "extra": "iterations: 30199\ncpu: 4126.239279446339 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.503307680175164,
            "unit": "ns/iter",
            "extra": "iterations: 58299083\ncpu: 2.4120962588725456 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 81417.32797390077,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 81227.13414634147 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.4107088512483057,
            "unit": "ns/iter",
            "extra": "iterations: 58303696\ncpu: 2.4077427269790923 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 746.9543293645219,
            "unit": "ns/iter",
            "extra": "iterations: 203966\ncpu: 742.5492484041458 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17994.866607173728,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 17962.098442023973 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3124.616677066697,
            "unit": "ns/iter",
            "extra": "iterations: 45903\ncpu: 3119.432281114525 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55815.61893571951,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 55552.83246283649 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 59.688901070445965,
            "unit": "ns/iter",
            "extra": "iterations: 2340855\ncpu: 59.689386997485975 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 351.82199186672904,
            "unit": "ns/iter",
            "extra": "iterations: 375971\ncpu: 351.7494700389126 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1190.1605978370983,
            "unit": "ns/iter",
            "extra": "iterations: 125607\ncpu: 1189.9448279156413 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 256.4698771147881,
            "unit": "ns/iter",
            "extra": "iterations: 504328\ncpu: 256.47316825557965 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1060.114481129964,
            "unit": "ns/iter",
            "extra": "iterations: 138085\ncpu: 1060.057211138067 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.7873883099900794,
            "unit": "ns/iter",
            "extra": "iterations: 50962463\ncpu: 2.7618366875243057 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.824870564018275,
            "unit": "ns/iter",
            "extra": "iterations: 48019702\ncpu: 2.818434816609233 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.678523576870694,
            "unit": "ns/iter",
            "extra": "iterations: 12885649\ncpu: 10.630182461123999 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.422093666776854,
            "unit": "ns/iter",
            "extra": "iterations: 60444352\ncpu: 2.403761396929196 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15852841861196126,
            "unit": "ms/iter",
            "extra": "iterations: 873\ncpu: 0.15474020618556705 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.32066061050036154,
            "unit": "ms/iter",
            "extra": "iterations: 443\ncpu: 0.3035733634311514 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16965695408900044,
            "unit": "ms/iter",
            "extra": "iterations: 894\ncpu: 0.1612178970917226 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3357524270409936,
            "unit": "ms/iter",
            "extra": "iterations: 444\ncpu: 0.3285954954954953 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15590365340070025,
            "unit": "ms/iter",
            "extra": "iterations: 820\ncpu: 0.15341548780487804 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.31010905026339225,
            "unit": "ms/iter",
            "extra": "iterations: 454\ncpu: 0.30443171806167396 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.646742989035213,
            "unit": "ms/iter",
            "extra": "iterations: 17\ncpu: 7.622158823529418 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 31.52289390563965,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.839320000000026 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645240043471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3250.710446649621,
            "unit": "ns/iter",
            "extra": "iterations: 41575\ncpu: 3242.5207456404087 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4285870537670506,
            "unit": "ns/iter",
            "extra": "iterations: 98160886\ncpu: 1.4258408384781698 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 69442.12427949301,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 65777.66306898168 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.428030191885727,
            "unit": "ns/iter",
            "extra": "iterations: 98134051\ncpu: 1.4263204114543273 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 587.8778981041631,
            "unit": "ns/iter",
            "extra": "iterations: 239643\ncpu: 583.0034676581416 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14978.644049746814,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 14923.812066203938 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2406.457495779115,
            "unit": "ns/iter",
            "extra": "iterations: 58460\ncpu: 2394.031816626751 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41183.986254178904,
            "unit": "ns/iter",
            "extra": "iterations: 3399\ncpu: 41041.01206237126 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 54.67171214931073,
            "unit": "ns/iter",
            "extra": "iterations: 2641828\ncpu: 53.019802954620815 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 279.4801666793648,
            "unit": "ns/iter",
            "extra": "iterations: 503708\ncpu: 278.0861133831506 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 884.2035991473913,
            "unit": "ns/iter",
            "extra": "iterations: 158864\ncpu: 881.9701128008863 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 203.38413042917625,
            "unit": "ns/iter",
            "extra": "iterations: 689407\ncpu: 203.25816244975758 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 839.1497358158479,
            "unit": "ns/iter",
            "extra": "iterations: 167794\ncpu: 834.9952918459533 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6925691839304393,
            "unit": "ns/iter",
            "extra": "iterations: 82811326\ncpu: 1.6905018523673923 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.695124906748059,
            "unit": "ns/iter",
            "extra": "iterations: 82652435\ncpu: 1.6930535682342571 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.967803249555468,
            "unit": "ns/iter",
            "extra": "iterations: 15622768\ncpu: 8.963891673997844 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6887698314483595,
            "unit": "ns/iter",
            "extra": "iterations: 81241368\ncpu: 1.6886877138750302 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11905350941698672,
            "unit": "ms/iter",
            "extra": "iterations: 1431\ncpu: 0.0941345213137666 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.19155535204657193,
            "unit": "ms/iter",
            "extra": "iterations: 725\ncpu: 0.1862097931034482 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.09550209097452411,
            "unit": "ms/iter",
            "extra": "iterations: 1466\ncpu: 0.0935195088676671 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.18911866655937787,
            "unit": "ms/iter",
            "extra": "iterations: 746\ncpu: 0.184890616621984 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11914160079044601,
            "unit": "ms/iter",
            "extra": "iterations: 1423\ncpu: 0.09471602248770201 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.18767909408424407,
            "unit": "ms/iter",
            "extra": "iterations: 737\ncpu: 0.1835397557666214 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.8066050211588545,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.795870833333336 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.79837926228841,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.77451666666667 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3508d7c11c8bce76e7de1d252b97a239516be2a7",
          "message": "allow extension of the lifetime of ContextStorage. (#1214)",
          "timestamp": "2022-02-18T23:44:56-08:00",
          "tree_id": "c4a43b76bc54e2209e13167fbc7a4f6a2876d1a5",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3508d7c11c8bce76e7de1d252b97a239516be2a7"
        },
        "date": 1645257406604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3669.4214950012506,
            "unit": "ns/iter",
            "extra": "iterations: 38132\ncpu: 3667.1483268645757 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6171154776660874,
            "unit": "ns/iter",
            "extra": "iterations: 86750153\ncpu: 1.6137493152317552 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74381.53471410148,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 74295.11677282379 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6167392218773717,
            "unit": "ns/iter",
            "extra": "iterations: 86770047\ncpu: 1.613554502281185 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 688.9089997445419,
            "unit": "ns/iter",
            "extra": "iterations: 211427\ncpu: 673.6712908001342 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16898.218117256147,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 16861.711603273958 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2735.9143535571775,
            "unit": "ns/iter",
            "extra": "iterations: 51751\ncpu: 2725.0429943382755 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46864.803290025055,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 46542.542542542564 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.97934206992002,
            "unit": "ns/iter",
            "extra": "iterations: 2644553\ncpu: 52.90602986591685 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 321.01145046293124,
            "unit": "ns/iter",
            "extra": "iterations: 444002\ncpu: 315.4699753604713 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1019.6846754461841,
            "unit": "ns/iter",
            "extra": "iterations: 139825\ncpu: 1001.4468085106386 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.1189076236431,
            "unit": "ns/iter",
            "extra": "iterations: 608452\ncpu: 230.26910914911952 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 957.8352469797768,
            "unit": "ns/iter",
            "extra": "iterations: 147775\ncpu: 948.0270681779734 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6918019756001883,
            "unit": "ns/iter",
            "extra": "iterations: 82591972\ncpu: 1.6893821108908749 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6947596096753292,
            "unit": "ns/iter",
            "extra": "iterations: 82769711\ncpu: 1.692004216373306 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.967927139989072,
            "unit": "ns/iter",
            "extra": "iterations: 15626221\ncpu: 8.95642650900688 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.690710112834039,
            "unit": "ns/iter",
            "extra": "iterations: 81153775\ncpu: 1.6886854616436515 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10940486478768026,
            "unit": "ms/iter",
            "extra": "iterations: 1271\ncpu: 0.10591329661683714 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21320228692432455,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.20731138088012144 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11776718438840379,
            "unit": "ms/iter",
            "extra": "iterations: 1275\ncpu: 0.10696690196078434 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2134509361985969,
            "unit": "ms/iter",
            "extra": "iterations: 658\ncpu: 0.2083867781155015 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10745273045966962,
            "unit": "ms/iter",
            "extra": "iterations: 1304\ncpu: 0.10510061349693246 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21200618111943625,
            "unit": "ms/iter",
            "extra": "iterations: 664\ncpu: 0.20708749999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 10.427095673301004,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.42938636363636 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.38115692138672,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.545539999999978 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645259733933,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3301.190893772152,
            "unit": "ns/iter",
            "extra": "iterations: 41651\ncpu: 3295.877649996399 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4468585553312765,
            "unit": "ns/iter",
            "extra": "iterations: 98481278\ncpu: 1.4255389740169697 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 65791.66843766956,
            "unit": "ns/iter",
            "extra": "iterations: 2131\ncpu: 65736.46175504458 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4277436251332611,
            "unit": "ns/iter",
            "extra": "iterations: 98525634\ncpu: 1.4272092884984626 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 582.9542878025741,
            "unit": "ns/iter",
            "extra": "iterations: 239654\ncpu: 582.7943618716981 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14918.99704892688,
            "unit": "ns/iter",
            "extra": "iterations: 9424\ncpu: 14903.162139219015 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2400.6093998788247,
            "unit": "ns/iter",
            "extra": "iterations: 58256\ncpu: 2399.268744850318 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41482.23438740479,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 40987.03976435936 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.17619433284071,
            "unit": "ns/iter",
            "extra": "iterations: 2645443\ncpu: 52.91000410895265 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.6940819867755,
            "unit": "ns/iter",
            "extra": "iterations: 444426\ncpu: 315.1948805875444 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1004.6073089112941,
            "unit": "ns/iter",
            "extra": "iterations: 139649\ncpu: 1001.7150140709925 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.24858257582036,
            "unit": "ns/iter",
            "extra": "iterations: 607286\ncpu: 230.56945162575784 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 951.3916488277537,
            "unit": "ns/iter",
            "extra": "iterations: 147793\ncpu: 947.3412137246011 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.692703228529427,
            "unit": "ns/iter",
            "extra": "iterations: 82625606\ncpu: 1.6826950715496114 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.694141458809843,
            "unit": "ns/iter",
            "extra": "iterations: 82789779\ncpu: 1.6916254843487382 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.280279254341728,
            "unit": "ns/iter",
            "extra": "iterations: 15631490\ncpu: 8.981063225578627 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.699986544764298,
            "unit": "ns/iter",
            "extra": "iterations: 78499097\ncpu: 1.6949252295220678 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11018115984989098,
            "unit": "ms/iter",
            "extra": "iterations: 1238\ncpu: 0.10561187399030694 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2156922062362623,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.20933479623824455 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10800142397825745,
            "unit": "ms/iter",
            "extra": "iterations: 1305\ncpu: 0.10519793103448276 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.23687301890441245,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.21372549317147194 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11045410132611287,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10607381874515882 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2139012018839518,
            "unit": "ms/iter",
            "extra": "iterations: 660\ncpu: 0.20769878787878793 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.420904939824885,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.353645454545455 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.378847122192383,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.33867999999999 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645266228502,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3901.7612724936234,
            "unit": "ns/iter",
            "extra": "iterations: 35972\ncpu: 3890.8623373735127 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.617725383323567,
            "unit": "ns/iter",
            "extra": "iterations: 86662622\ncpu: 1.615356156660019 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 82718.91032885111,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 82508.04274465694 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.616720020415184,
            "unit": "ns/iter",
            "extra": "iterations: 86648677\ncpu: 1.6152664396710876 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 689.5074486561502,
            "unit": "ns/iter",
            "extra": "iterations: 211952\ncpu: 673.8931456178757 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16984.15719691622,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 16872.31658836284 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2818.9231493204998,
            "unit": "ns/iter",
            "extra": "iterations: 49213\ncpu: 2818.0744925121417 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 48880.49343176055,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 48860.491228070154 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.534093452983264,
            "unit": "ns/iter",
            "extra": "iterations: 2616583\ncpu: 53.461480105924416 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.7802762930908,
            "unit": "ns/iter",
            "extra": "iterations: 443295\ncpu: 315.7671527989263 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1005.1842501698416,
            "unit": "ns/iter",
            "extra": "iterations: 139566\ncpu: 1003.8096671109005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.8167256322339,
            "unit": "ns/iter",
            "extra": "iterations: 601297\ncpu: 232.56909646979778 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 952.0895703281317,
            "unit": "ns/iter",
            "extra": "iterations: 147437\ncpu: 949.4746908849207 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.150580376737554,
            "unit": "ns/iter",
            "extra": "iterations: 82352941\ncpu: 1.6967202179215437 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.480807234292006,
            "unit": "ns/iter",
            "extra": "iterations: 82366023\ncpu: 1.6978663641438652 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.989805615977188,
            "unit": "ns/iter",
            "extra": "iterations: 15593257\ncpu: 8.966818157361223 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6929127419620869,
            "unit": "ns/iter",
            "extra": "iterations: 82668052\ncpu: 1.6890442755322217 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11523167612473874,
            "unit": "ms/iter",
            "extra": "iterations: 1241\ncpu: 0.10564689766317485 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21337992504623482,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.20783823975720792 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10837531237868789,
            "unit": "ms/iter",
            "extra": "iterations: 1288\ncpu: 0.1062105590062112 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2155376754644263,
            "unit": "ms/iter",
            "extra": "iterations: 655\ncpu: 0.20865664122137398 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10804676401089626,
            "unit": "ms/iter",
            "extra": "iterations: 1293\ncpu: 0.1057051817478732 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21273665632938316,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.20763941717791415 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.375648758628151,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.3659 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.42988459269206,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.326099999999983 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645691194443,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3571.590715499858,
            "unit": "ns/iter",
            "extra": "iterations: 38550\ncpu: 3440.1608300907915 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.1856133425216813,
            "unit": "ns/iter",
            "extra": "iterations: 69183291\ncpu: 2.1827206803446226 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 70570.85314492766,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 70536.36862314868 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.081413101449043,
            "unit": "ns/iter",
            "extra": "iterations: 67232379\ncpu: 2.069663487588325 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 619.1971702579722,
            "unit": "ns/iter",
            "extra": "iterations: 226712\ncpu: 618.0996153710435 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 14426.457101419332,
            "unit": "ns/iter",
            "extra": "iterations: 9836\ncpu: 14389.690931272866 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2639.285142050875,
            "unit": "ns/iter",
            "extra": "iterations: 40535\ncpu: 2623.7695818428497 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46737.98077041518,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 46708.644466868456 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 62.07642176577626,
            "unit": "ns/iter",
            "extra": "iterations: 2694074\ncpu: 51.36536709830539 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 388.9566838954881,
            "unit": "ns/iter",
            "extra": "iterations: 387637\ncpu: 346.308272946081 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1504.589700460648,
            "unit": "ns/iter",
            "extra": "iterations: 125913\ncpu: 1138.5893434355464 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 292.58729390586376,
            "unit": "ns/iter",
            "extra": "iterations: 531668\ncpu: 250.15818142148876 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1261.2021419573452,
            "unit": "ns/iter",
            "extra": "iterations: 141828\ncpu: 1049.7031615759934 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.10863073389876,
            "unit": "ns/iter",
            "extra": "iterations: 67285048\ncpu: 2.1043189268438955 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.1182790829495213,
            "unit": "ns/iter",
            "extra": "iterations: 70264899\ncpu: 2.110777957568829 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.161160817906868,
            "unit": "ns/iter",
            "extra": "iterations: 15468126\ncpu: 9.150901667079776 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.001497690684538,
            "unit": "ns/iter",
            "extra": "iterations: 76047693\ncpu: 1.99410651418446 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.132272739221554,
            "unit": "ms/iter",
            "extra": "iterations: 1010\ncpu: 0.12926623762376238 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2737558165261912,
            "unit": "ms/iter",
            "extra": "iterations: 516\ncpu: 0.2682436046511628 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14206963519367571,
            "unit": "ms/iter",
            "extra": "iterations: 1062\ncpu: 0.13963418079096046 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.26199634927902776,
            "unit": "ms/iter",
            "extra": "iterations: 548\ncpu: 0.2563629562043795 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.13374744317470452,
            "unit": "ms/iter",
            "extra": "iterations: 975\ncpu: 0.13114984615384617 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24406340989199551,
            "unit": "ms/iter",
            "extra": "iterations: 528\ncpu: 0.2390085227272726 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.270636682925017,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 6.261943478260874 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 23.492733637491863,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 23.470666666666677 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646109273601,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4500.1722353544665,
            "unit": "ns/iter",
            "extra": "iterations: 37331\ncpu: 3770.555302563553 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.166113761847419,
            "unit": "ns/iter",
            "extra": "iterations: 86102450\ncpu: 1.6271813403683635 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 99043.07274249903,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 75130.93447905476 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.1081985441746856,
            "unit": "ns/iter",
            "extra": "iterations: 85953904\ncpu: 1.6266812034506313 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 848.1192505286132,
            "unit": "ns/iter",
            "extra": "iterations: 210957\ncpu: 676.3226629123476 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21607.42167963442,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 17012.308249788613 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3553.1765117518194,
            "unit": "ns/iter",
            "extra": "iterations: 50734\ncpu: 2755.7693065794147 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 59842.98366913821,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 46670.28743315511 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.77513034220708,
            "unit": "ns/iter",
            "extra": "iterations: 2635011\ncpu: 53.079171206495914 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 378.6225411889686,
            "unit": "ns/iter",
            "extra": "iterations: 441703\ncpu: 316.4456659791761 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1181.625387269343,
            "unit": "ns/iter",
            "extra": "iterations: 139122\ncpu: 1008.4853581748389 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 278.8717281290628,
            "unit": "ns/iter",
            "extra": "iterations: 598664\ncpu: 231.3088811086018 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1252.149871947166,
            "unit": "ns/iter",
            "extra": "iterations: 146794\ncpu: 953.2433205716854 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6927405892116807,
            "unit": "ns/iter",
            "extra": "iterations: 82860829\ncpu: 1.6871494249713577 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.694776366064178,
            "unit": "ns/iter",
            "extra": "iterations: 81860813\ncpu: 1.6923091149852127 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.954465847325627,
            "unit": "ns/iter",
            "extra": "iterations: 15635627\ncpu: 8.95051410474297 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.688028766941276,
            "unit": "ns/iter",
            "extra": "iterations: 81776179\ncpu: 1.686519249083526 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.4969230064978966,
            "unit": "ms/iter",
            "extra": "iterations: 260\ncpu: 0.11573884615384616 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.46953394369113666,
            "unit": "ms/iter",
            "extra": "iterations: 326\ncpu: 0.2190957055214724 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.9790323674678802,
            "unit": "ms/iter",
            "extra": "iterations: 256\ncpu: 0.11854609375000003 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.4205022539411272,
            "unit": "ms/iter",
            "extra": "iterations: 553\ncpu: 0.21841247739602165 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.8374260643781242,
            "unit": "ms/iter",
            "extra": "iterations: 236\ncpu: 0.11864491525423718 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.39022040754349213,
            "unit": "ms/iter",
            "extra": "iterations: 431\ncpu: 0.23293480278422277 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 18.243861198425293,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 7.289859999999997 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 42.604525883992515,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 26.43270000000001 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fe14b984a07197e5d2676d4678dcef8a9d559db",
          "message": "centos image (#1240)",
          "timestamp": "2022-03-02T02:29:47-08:00",
          "tree_id": "8f2bba36fcff0ec3cd1dd18ed8ab9f7c9f9bf5f9",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1fe14b984a07197e5d2676d4678dcef8a9d559db"
        },
        "date": 1646217774333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4760.777904495845,
            "unit": "ns/iter",
            "extra": "iterations: 37488\ncpu: 3761.187580025608 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0647901754279796,
            "unit": "ns/iter",
            "extra": "iterations: 86518020\ncpu: 1.6291230428065737 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 106214.43129422372,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 77170.39473684212 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.535399421251559,
            "unit": "ns/iter",
            "extra": "iterations: 85356485\ncpu: 1.6334880706486452 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 976.240736997708,
            "unit": "ns/iter",
            "extra": "iterations: 203549\ncpu: 699.3200654387888 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22832.44938045353,
            "unit": "ns/iter",
            "extra": "iterations: 7854\ncpu: 17942.653425006378 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3793.9513702064064,
            "unit": "ns/iter",
            "extra": "iterations: 50164\ncpu: 2792.5524280360446 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56586.17559468971,
            "unit": "ns/iter",
            "extra": "iterations: 2915\ncpu: 47386.65523156088 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.14392454330813,
            "unit": "ns/iter",
            "extra": "iterations: 2641769\ncpu: 52.94160844494732 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 323.6151623089438,
            "unit": "ns/iter",
            "extra": "iterations: 434692\ncpu: 321.8524840576777 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1006.9384586516735,
            "unit": "ns/iter",
            "extra": "iterations: 139853\ncpu: 1001.8061822056015 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.11627200151202,
            "unit": "ns/iter",
            "extra": "iterations: 607057\ncpu: 230.54589601964884 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.1850840532026,
            "unit": "ns/iter",
            "extra": "iterations: 147504\ncpu: 949.485437683046 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.4748950206992677,
            "unit": "ns/iter",
            "extra": "iterations: 82699305\ncpu: 1.6930625958706667 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.2666758401202554,
            "unit": "ns/iter",
            "extra": "iterations: 82597819\ncpu: 1.693892183763351 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.008005878014659,
            "unit": "ns/iter",
            "extra": "iterations: 15613760\ncpu: 8.95887985981596 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.693916440482798,
            "unit": "ns/iter",
            "extra": "iterations: 82755033\ncpu: 1.6889135915153342 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11272445690927742,
            "unit": "ms/iter",
            "extra": "iterations: 1249\ncpu: 0.10804507606084869 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22186286865718782,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 0.21450047619047616 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11033714977219874,
            "unit": "ms/iter",
            "extra": "iterations: 1285\ncpu: 0.1071374319066148 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21474938179568628,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.21002973805855157 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11028340144187027,
            "unit": "ms/iter",
            "extra": "iterations: 1288\ncpu: 0.10663074534161492 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21475480823982052,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.20998262195121953 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.418704986572266,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.4041590909090935 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.673770904541016,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.544980000000006 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237244529,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4701.890876178328,
            "unit": "ns/iter",
            "extra": "iterations: 36078\ncpu: 4162.450801042187 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.201925454286054,
            "unit": "ns/iter",
            "extra": "iterations: 50629982\ncpu: 2.731330222475687 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 104923.12982215645,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 84105.90062111801 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.523974596301117,
            "unit": "ns/iter",
            "extra": "iterations: 50895765\ncpu: 2.706531673116615 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 870.8326130729253,
            "unit": "ns/iter",
            "extra": "iterations: 203610\ncpu: 713.4241933107411 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22899.29054206433,
            "unit": "ns/iter",
            "extra": "iterations: 7513\ncpu: 18229.828297617456 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2918.7215035068643,
            "unit": "ns/iter",
            "extra": "iterations: 47375\ncpu: 2915.6116094986796 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52823.858746027545,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 52753.813559322014 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 60.35321339754609,
            "unit": "ns/iter",
            "extra": "iterations: 2374890\ncpu: 60.19752493799714 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 350.3240223280745,
            "unit": "ns/iter",
            "extra": "iterations: 408036\ncpu: 349.9061357331217 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1197.9926824261593,
            "unit": "ns/iter",
            "extra": "iterations: 119941\ncpu: 1194.227995431087 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 247.63250063912741,
            "unit": "ns/iter",
            "extra": "iterations: 549035\ncpu: 247.0281493893832 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1046.5598245197102,
            "unit": "ns/iter",
            "extra": "iterations: 134141\ncpu: 1039.7529465264165 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.9628723640002694,
            "unit": "ns/iter",
            "extra": "iterations: 56764735\ncpu: 2.56170666523855 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.821030726654894,
            "unit": "ns/iter",
            "extra": "iterations: 51087805\ncpu: 2.6959173524875455 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.080206494521597,
            "unit": "ns/iter",
            "extra": "iterations: 12893600\ncpu: 11.007965192033257 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.26621516980329,
            "unit": "ns/iter",
            "extra": "iterations: 60210651\ncpu: 2.2603708436900964 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.15028193593025208,
            "unit": "ms/iter",
            "extra": "iterations: 896\ncpu: 0.14671707589285715 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3129754066467285,
            "unit": "ms/iter",
            "extra": "iterations: 500\ncpu: 0.3048354 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1542575253641664,
            "unit": "ms/iter",
            "extra": "iterations: 1015\ncpu: 0.15113221674876853 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2949402800628117,
            "unit": "ms/iter",
            "extra": "iterations: 448\ncpu: 0.2896859375000001 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15618828464225634,
            "unit": "ms/iter",
            "extra": "iterations: 959\ncpu: 0.14887705943691346 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.30568728777652887,
            "unit": "ms/iter",
            "extra": "iterations: 447\ncpu: 0.29920850111856834 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.9197773933410645,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 6.8903099999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.599191665649414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.424659999999967 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646364018405,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3723.267638382338,
            "unit": "ns/iter",
            "extra": "iterations: 37587\ncpu: 3719.174182563121 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6157053928050737,
            "unit": "ns/iter",
            "extra": "iterations: 86780266\ncpu: 1.6137032813427883 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 77285.64159782906,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 76588.47624249045 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6216477893402519,
            "unit": "ns/iter",
            "extra": "iterations: 86686770\ncpu: 1.616665380426563 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 672.7633928478465,
            "unit": "ns/iter",
            "extra": "iterations: 208219\ncpu: 671.6327520543279 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17636.113887210544,
            "unit": "ns/iter",
            "extra": "iterations: 7923\ncpu: 17612.066136564423 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2708.7600272093314,
            "unit": "ns/iter",
            "extra": "iterations: 51386\ncpu: 2706.97855447009 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46572.41989079812,
            "unit": "ns/iter",
            "extra": "iterations: 3001\ncpu: 46516.69443518826 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.43267556207393,
            "unit": "ns/iter",
            "extra": "iterations: 2640638\ncpu: 52.98390010292968 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 320.3980012528928,
            "unit": "ns/iter",
            "extra": "iterations: 437288\ncpu: 320.0812736686121 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1008.3154855037591,
            "unit": "ns/iter",
            "extra": "iterations: 138820\ncpu: 1006.6532199971188 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.8966851389184,
            "unit": "ns/iter",
            "extra": "iterations: 606292\ncpu: 230.942186273281 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.8983937805743,
            "unit": "ns/iter",
            "extra": "iterations: 147444\ncpu: 951.5883996636007 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6951861270547703,
            "unit": "ns/iter",
            "extra": "iterations: 82550577\ncpu: 1.6932528527329374 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.699885853082414,
            "unit": "ns/iter",
            "extra": "iterations: 82703702\ncpu: 1.6943147236625513 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.958054127469218,
            "unit": "ns/iter",
            "extra": "iterations: 15629151\ncpu: 8.953448591033514 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6916725453578212,
            "unit": "ns/iter",
            "extra": "iterations: 82138415\ncpu: 1.6901129635871355 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11124622588064156,
            "unit": "ms/iter",
            "extra": "iterations: 1224\ncpu: 0.10743390522875818 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2181876515513536,
            "unit": "ms/iter",
            "extra": "iterations: 633\ncpu: 0.21109636650868888 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12146097869269933,
            "unit": "ms/iter",
            "extra": "iterations: 1265\ncpu: 0.10815501976284586 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.23383646055436097,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.21087673343605548 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11018715846310755,
            "unit": "ms/iter",
            "extra": "iterations: 1256\ncpu: 0.10737197452229305 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21532262006897163,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.2101012539184952 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.516229022632945,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.493427272727266 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.996828079223633,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.74375999999998 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646435819964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4237.405509696502,
            "unit": "ns/iter",
            "extra": "iterations: 32819\ncpu: 4232.0911667022165 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.540953312576956,
            "unit": "ns/iter",
            "extra": "iterations: 54318305\ncpu: 2.5105385744271658 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 91565.93619480522,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 91310.81081081083 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.671232721806163,
            "unit": "ns/iter",
            "extra": "iterations: 55526250\ncpu: 2.5913185205195757 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 861.3048603936882,
            "unit": "ns/iter",
            "extra": "iterations: 181400\ncpu: 810.4206174200658 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 24204.677821036414,
            "unit": "ns/iter",
            "extra": "iterations: 6888\ncpu: 19464.0243902439 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3257.8361033312635,
            "unit": "ns/iter",
            "extra": "iterations: 44124\ncpu: 3109.7203336052935 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58559.340183612985,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 57857.58591785417 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 62.776570140022514,
            "unit": "ns/iter",
            "extra": "iterations: 2289684\ncpu: 62.69485221541489 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 391.538209769966,
            "unit": "ns/iter",
            "extra": "iterations: 371236\ncpu: 390.581732375093 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1273.3610133207576,
            "unit": "ns/iter",
            "extra": "iterations: 114876\ncpu: 1260.8403844144993 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 276.9337281351975,
            "unit": "ns/iter",
            "extra": "iterations: 546779\ncpu: 276.08595063087654 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1181.8955029740034,
            "unit": "ns/iter",
            "extra": "iterations: 110402\ncpu: 1179.059256172896 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.66366321730938,
            "unit": "ns/iter",
            "extra": "iterations: 51830352\ncpu: 2.8619658998264184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 5.482687878318068,
            "unit": "ns/iter",
            "extra": "iterations: 43682701\ncpu: 2.82892992354113 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.565876960754395,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 10.53347 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.2660557408041595,
            "unit": "ns/iter",
            "extra": "iterations: 56018150\ncpu: 2.2628862252680606 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1852169865223772,
            "unit": "ms/iter",
            "extra": "iterations: 898\ncpu: 0.15819688195991094 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2991982105066958,
            "unit": "ms/iter",
            "extra": "iterations: 446\ncpu: 0.2927632286995515 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1549705986149055,
            "unit": "ms/iter",
            "extra": "iterations: 968\ncpu: 0.15200506198347108 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.30307494087954406,
            "unit": "ms/iter",
            "extra": "iterations: 467\ncpu: 0.29606209850107085 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.3218527351106916,
            "unit": "ms/iter",
            "extra": "iterations: 560\ncpu: 0.15770624999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.37307198093585847,
            "unit": "ms/iter",
            "extra": "iterations: 467\ncpu: 0.3011089935760173 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 8.075968424479166,
            "unit": "ms/iter",
            "extra": "iterations: 15\ncpu: 7.270706666666671 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 36.16517782211304,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 30.84552500000004 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646628467908,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3720.0343259461133,
            "unit": "ns/iter",
            "extra": "iterations: 37633\ncpu: 3715.749475194643 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6147954083723737,
            "unit": "ns/iter",
            "extra": "iterations: 86767896\ncpu: 1.6138515102406081 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 85523.33891682194,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 76160.53059014617 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9112359700379562,
            "unit": "ns/iter",
            "extra": "iterations: 86207427\ncpu: 1.6193871555869546 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 671.7784577364285,
            "unit": "ns/iter",
            "extra": "iterations: 208059\ncpu: 670.346872762053 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17643.543728688666,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 17632.9398467914 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2702.045028496922,
            "unit": "ns/iter",
            "extra": "iterations: 51828\ncpu: 2700.6232152504404 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46821.05967456824,
            "unit": "ns/iter",
            "extra": "iterations: 3015\ncpu: 46477.479270315045 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.96399965206672,
            "unit": "ns/iter",
            "extra": "iterations: 2643649\ncpu: 52.89923132760816 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 331.7915973919837,
            "unit": "ns/iter",
            "extra": "iterations: 436261\ncpu: 320.65690034176794 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1049.1096119148128,
            "unit": "ns/iter",
            "extra": "iterations: 137717\ncpu: 1021.2152457576044 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.4473169795085,
            "unit": "ns/iter",
            "extra": "iterations: 606780\ncpu: 230.29961435775735 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 947.2529209941735,
            "unit": "ns/iter",
            "extra": "iterations: 147327\ncpu: 947.2391347139356 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7758918367673915,
            "unit": "ns/iter",
            "extra": "iterations: 80758204\ncpu: 1.7324629953385298 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.73629428786702,
            "unit": "ns/iter",
            "extra": "iterations: 81670750\ncpu: 1.7035499245445895 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.123594429834872,
            "unit": "ns/iter",
            "extra": "iterations: 15591763\ncpu: 8.97906157244694 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7025068574876814,
            "unit": "ns/iter",
            "extra": "iterations: 82640238\ncpu: 1.6956860651829209 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11075692347796315,
            "unit": "ms/iter",
            "extra": "iterations: 1255\ncpu: 0.10668501992031873 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.23100511083063088,
            "unit": "ms/iter",
            "extra": "iterations: 636\ncpu: 0.21355770440251573 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1678845701707313,
            "unit": "ms/iter",
            "extra": "iterations: 1227\ncpu: 0.11076821515892421 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21862010566555723,
            "unit": "ms/iter",
            "extra": "iterations: 637\ncpu: 0.21153328100470967 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10864025517347536,
            "unit": "ms/iter",
            "extra": "iterations: 1207\ncpu: 0.10627796188898098 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21259942179268224,
            "unit": "ms/iter",
            "extra": "iterations: 651\ncpu: 0.20819155145929333 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.397214802828702,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.372418181818182 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.278011957804363,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.272033333333315 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32cd04774b8e7610d89c532b8b984d1ea5c1f518",
          "message": "Bump codecov/codecov-action from 1 to 2.1.0 (#1247)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 1 to 2.1.0.\r\n- [Release notes](https://github.com/codecov/codecov-action/releases)\r\n- [Changelog](https://github.com/codecov/codecov-action/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/codecov/codecov-action/compare/v1...v2.1.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: codecov/codecov-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Ehsan Saei <71217171+esigo@users.noreply.github.com>",
          "timestamp": "2022-03-07T17:16:50+01:00",
          "tree_id": "2a039464fe4b158522433cc28d990e1bde7df908",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/32cd04774b8e7610d89c532b8b984d1ea5c1f518"
        },
        "date": 1646670535772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5285.3715130404835,
            "unit": "ns/iter",
            "extra": "iterations: 37654\ncpu: 3710.832846443937 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 4.333321281157911,
            "unit": "ns/iter",
            "extra": "iterations: 46413404\ncpu: 3.0154435559175967 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 105909.6571091847,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 74598.18473037909 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 4.748721903806133,
            "unit": "ns/iter",
            "extra": "iterations: 46404174\ncpu: 3.019180990054905 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 981.9064653454207,
            "unit": "ns/iter",
            "extra": "iterations: 217457\ncpu: 639.8579949139369 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16554.145161095406,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 16498.98644667058 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2922.6041014435204,
            "unit": "ns/iter",
            "extra": "iterations: 47195\ncpu: 2918.0866617226393 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52140.550212459166,
            "unit": "ns/iter",
            "extra": "iterations: 2664\ncpu: 52054.95495495494 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 56.786901389886665,
            "unit": "ns/iter",
            "extra": "iterations: 2465674\ncpu: 56.745092822489916 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 350.0402256064627,
            "unit": "ns/iter",
            "extra": "iterations: 444385\ncpu: 315.50232343575954 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1424.9971088470538,
            "unit": "ns/iter",
            "extra": "iterations: 138009\ncpu: 1016.6836945416605 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 363.38483077702205,
            "unit": "ns/iter",
            "extra": "iterations: 572403\ncpu: 245.10248898066578 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1279.4803644168408,
            "unit": "ns/iter",
            "extra": "iterations: 144223\ncpu: 974.3106161985261 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.01428351155455,
            "unit": "ns/iter",
            "extra": "iterations: 46347487\ncpu: 3.013839779490094 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0105838361437414,
            "unit": "ns/iter",
            "extra": "iterations: 46449900\ncpu: 3.0106071272489285 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.783902189313263,
            "unit": "ns/iter",
            "extra": "iterations: 16052285\ncpu: 8.784001779185953 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.9397944935379736,
            "unit": "ns/iter",
            "extra": "iterations: 46126677\ncpu: 2.939817234178826 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 1.6378498077392578,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.139653 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.9617006949830854,
            "unit": "ms/iter",
            "extra": "iterations: 418\ncpu: 0.25548277511961726 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.7489594546231356,
            "unit": "ms/iter",
            "extra": "iterations: 143\ncpu: 0.13298601398601403 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 1.4352083206176758,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.7073659999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.5461243074244252,
            "unit": "ms/iter",
            "extra": "iterations: 651\ncpu: 0.12853379416282645 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.0726248964350273,
            "unit": "ms/iter",
            "extra": "iterations: 94\ncpu: 0.6084117021276599 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.391285969660832,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.379407692307693 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.206823031107586,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.18411666666668 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cba0a2a657a154d543eb736ed448c85a2bda88f3",
          "message": "Bump actions/checkout from 2 to 3 (#1248)",
          "timestamp": "2022-03-07T17:03:30Z",
          "tree_id": "a174c8f96600184e1dc540b6d9e0cb8f1a72ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cba0a2a657a154d543eb736ed448c85a2bda88f3"
        },
        "date": 1646673989194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3749.883021945099,
            "unit": "ns/iter",
            "extra": "iterations: 37333\ncpu: 3749.41204832186 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6190771523075353,
            "unit": "ns/iter",
            "extra": "iterations: 86607938\ncpu: 1.615789536520313 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75696.80164876214,
            "unit": "ns/iter",
            "extra": "iterations: 1847\ncpu: 75643.20519761778 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6155085313091886,
            "unit": "ns/iter",
            "extra": "iterations: 86643850\ncpu: 1.6154845381409078 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 671.8512910560834,
            "unit": "ns/iter",
            "extra": "iterations: 207727\ncpu: 670.5161100867962 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17636.85386306298,
            "unit": "ns/iter",
            "extra": "iterations: 7946\ncpu: 17636.55927510697 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2708.3473560031043,
            "unit": "ns/iter",
            "extra": "iterations: 52195\ncpu: 2706.215154708309 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46718.172353125716,
            "unit": "ns/iter",
            "extra": "iterations: 2993\ncpu: 46648.58002004679 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.339178909955585,
            "unit": "ns/iter",
            "extra": "iterations: 2639438\ncpu: 52.95669002264876 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.4435433853054,
            "unit": "ns/iter",
            "extra": "iterations: 439465\ncpu: 318.3359311890594 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1000.2568141828888,
            "unit": "ns/iter",
            "extra": "iterations: 137004\ncpu: 999.9737233949371 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 233.46610439693526,
            "unit": "ns/iter",
            "extra": "iterations: 601333\ncpu: 232.95395396560642 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 947.2157669603688,
            "unit": "ns/iter",
            "extra": "iterations: 145815\ncpu: 945.9205157219762 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6933518380994435,
            "unit": "ns/iter",
            "extra": "iterations: 82694909\ncpu: 1.6872405047328853 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.710296745800577,
            "unit": "ns/iter",
            "extra": "iterations: 82714941\ncpu: 1.692627695883867 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.494745783100239,
            "unit": "ns/iter",
            "extra": "iterations: 15635103\ncpu: 8.96237140235021 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7228491724330042,
            "unit": "ns/iter",
            "extra": "iterations: 82532571\ncpu: 1.6974268255862286 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1112136325320682,
            "unit": "ms/iter",
            "extra": "iterations: 925\ncpu: 0.10830691891891893 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21789638424216773,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.212048753894081 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11287755446821662,
            "unit": "ms/iter",
            "extra": "iterations: 1267\ncpu: 0.10834427782162588 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.22185517248706282,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.21431728971962621 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11127718378988545,
            "unit": "ms/iter",
            "extra": "iterations: 1246\ncpu: 0.10866083467094707 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21851768374814423,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.21126760124610597 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.471027027476918,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.442368181818173 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.686025619506836,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.629199999999976 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owentou@tencent.com",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c96a3e32f0b5bf17e58b1300383f9f205f33558f",
          "message": "Reorder the destructor of members in LoggerProvider and TracerProvider (#1245)",
          "timestamp": "2022-03-08T10:17:02-08:00",
          "tree_id": "18800f0b76f00683569a119ae88fdff4bd9c013f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c96a3e32f0b5bf17e58b1300383f9f205f33558f"
        },
        "date": 1646764222504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3703.841549478,
            "unit": "ns/iter",
            "extra": "iterations: 37674\ncpu: 3701.1307533046665 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.0155022468545893,
            "unit": "ns/iter",
            "extra": "iterations: 46447589\ncpu: 3.0103155623427513 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 74235.38276960341,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 74193.3014354067 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.0215868781522257,
            "unit": "ns/iter",
            "extra": "iterations: 46407712\ncpu: 3.013436646047105 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 631.7278201292023,
            "unit": "ns/iter",
            "extra": "iterations: 220659\ncpu: 631.2790323530879 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16258.804277441968,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 16255.965517241382 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2883.382634710642,
            "unit": "ns/iter",
            "extra": "iterations: 48772\ncpu: 2883.418764865084 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 50630.720056596154,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 50631.21557106137 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 84.39434575889761,
            "unit": "ns/iter",
            "extra": "iterations: 2464142\ncpu: 56.798066020545896 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 458.3641981162139,
            "unit": "ns/iter",
            "extra": "iterations: 438274\ncpu: 319.257359551331 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1303.4537039244506,
            "unit": "ns/iter",
            "extra": "iterations: 139312\ncpu: 1008.208912369358 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 358.8122060686438,
            "unit": "ns/iter",
            "extra": "iterations: 558735\ncpu: 250.58999346738625 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1381.7869870993454,
            "unit": "ns/iter",
            "extra": "iterations: 144457\ncpu: 969.4483479512938 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.019356957411534,
            "unit": "ns/iter",
            "extra": "iterations: 46407558\ncpu: 3.0139594934083798 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0261650182304716,
            "unit": "ns/iter",
            "extra": "iterations: 46488615\ncpu: 3.009039955266467 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.842681457338623,
            "unit": "ns/iter",
            "extra": "iterations: 16028356\ncpu: 8.812850176275095 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.9386067975689465,
            "unit": "ns/iter",
            "extra": "iterations: 45037365\ncpu: 2.9299738117449805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12151767263192266,
            "unit": "ms/iter",
            "extra": "iterations: 1126\ncpu: 0.11846447602131441 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2512000308800072,
            "unit": "ms/iter",
            "extra": "iterations: 581\ncpu: 0.23532065404475044 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12111684442803934,
            "unit": "ms/iter",
            "extra": "iterations: 1156\ncpu: 0.11810605536332179 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24490527910728976,
            "unit": "ms/iter",
            "extra": "iterations: 584\ncpu: 0.23491678082191783 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12202242236116748,
            "unit": "ms/iter",
            "extra": "iterations: 1155\ncpu: 0.11908259740259741 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2398653371573713,
            "unit": "ms/iter",
            "extra": "iterations: 587\ncpu: 0.2345357751277685 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.464507983281062,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.428119230769225 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.170464197794598,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.061483333333317 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dj@gregor.com",
            "name": "DJ Gregor",
            "username": "deejgregor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd5a6218bde5a728019f377a67f75c7b821f76c7",
          "message": "Add support for span links to Jaeger export. (#1251)",
          "timestamp": "2022-03-09T09:35:09-08:00",
          "tree_id": "a2ab79068f3d318617bcedeed45d64c2082b8f90",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd5a6218bde5a728019f377a67f75c7b821f76c7"
        },
        "date": 1646848037856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3727.9036502395224,
            "unit": "ns/iter",
            "extra": "iterations: 37724\ncpu: 3722.508217580321 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.627671936107805,
            "unit": "ns/iter",
            "extra": "iterations: 86684086\ncpu: 1.6150888411051598 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75973.47358604531,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 75770.07575757576 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6188156472850703,
            "unit": "ns/iter",
            "extra": "iterations: 86771123\ncpu: 1.6141775645798657 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 685.643360441435,
            "unit": "ns/iter",
            "extra": "iterations: 205695\ncpu: 683.1109166484355 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17648.85432527002,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 17627.138902868643 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2744.464407029796,
            "unit": "ns/iter",
            "extra": "iterations: 51313\ncpu: 2724.7539609845453 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46662.160646772194,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 46623.29773030707 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 58.92679153892877,
            "unit": "ns/iter",
            "extra": "iterations: 2645243\ncpu: 53.13485377335844 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.5676325991436,
            "unit": "ns/iter",
            "extra": "iterations: 442271\ncpu: 316.47383617736637 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1063.2770277995053,
            "unit": "ns/iter",
            "extra": "iterations: 139702\ncpu: 1003.1882149146037 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 240.1713558877897,
            "unit": "ns/iter",
            "extra": "iterations: 605712\ncpu: 231.20773568956855 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 950.5545763726046,
            "unit": "ns/iter",
            "extra": "iterations: 147572\ncpu: 948.0524760794729 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.03948872313225,
            "unit": "ns/iter",
            "extra": "iterations: 82717384\ncpu: 1.7054867209050038 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.291922798403297,
            "unit": "ns/iter",
            "extra": "iterations: 81954258\ncpu: 1.7117573073506442 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 12.296200467602805,
            "unit": "ns/iter",
            "extra": "iterations: 15423003\ncpu: 9.05964292427357 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.3100214428064,
            "unit": "ns/iter",
            "extra": "iterations: 80507427\ncpu: 1.7221429769454684 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11462167976728452,
            "unit": "ms/iter",
            "extra": "iterations: 1071\ncpu: 0.10936591970121383 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22217771476339024,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.21559686520376178 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11201841829310548,
            "unit": "ms/iter",
            "extra": "iterations: 1257\ncpu: 0.10927231503579952 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.22186866748295608,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.21540454545454554 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.11654537216371853,
            "unit": "ms/iter",
            "extra": "iterations: 1235\ncpu: 0.10993870445344131 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2209926214743787,
            "unit": "ms/iter",
            "extra": "iterations: 635\ncpu: 0.21456944881889767 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.542512348720005,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.51954285714285 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.157236099243164,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.955040000000018 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wangxiaolin374@gmail.com",
            "name": "wxl374",
            "username": "wxl374"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a7200b3658517c80412e0c7edfd15208873cf47",
          "message": "fix: use CURLOPT_TIMEOUT_MS to config OtlpHttpExporter's timeout instead of CURLOPT_TIMEOUT (#1261)",
          "timestamp": "2022-03-11T19:43:43+01:00",
          "tree_id": "d90ecfa46f3612ac5bb37c7beb11d1c5b4abb99e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/4a7200b3658517c80412e0c7edfd15208873cf47"
        },
        "date": 1647025064048,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3749.5472624219906,
            "unit": "ns/iter",
            "extra": "iterations: 37448\ncpu: 3733.200704977569 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.0628755789026654,
            "unit": "ns/iter",
            "extra": "iterations: 86426689\ncpu: 1.629925913278941 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 101014.66389224224,
            "unit": "ns/iter",
            "extra": "iterations: 1791\ncpu: 77665.99664991628 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.852441155941071,
            "unit": "ns/iter",
            "extra": "iterations: 84604925\ncpu: 1.6306615720065931 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 963.2062196096028,
            "unit": "ns/iter",
            "extra": "iterations: 202953\ncpu: 690.271639246525 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22663.053820705558,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 17986.449421238023 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3705.665640260698,
            "unit": "ns/iter",
            "extra": "iterations: 49557\ncpu: 2833.3353512117396 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 58087.6023619325,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 48294.12587412589 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.882981966047154,
            "unit": "ns/iter",
            "extra": "iterations: 2643619\ncpu: 52.880010319187456 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.4466653815487,
            "unit": "ns/iter",
            "extra": "iterations: 443919\ncpu: 315.3435649296381 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 999.1151279957886,
            "unit": "ns/iter",
            "extra": "iterations: 140336\ncpu: 997.3086022118342 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.50703757634673,
            "unit": "ns/iter",
            "extra": "iterations: 608979\ncpu: 230.42502286614152 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 946.1248187130312,
            "unit": "ns/iter",
            "extra": "iterations: 148082\ncpu: 944.7677638065401 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.8042549333971605,
            "unit": "ns/iter",
            "extra": "iterations: 80677693\ncpu: 1.7001477719498004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7065496906882947,
            "unit": "ns/iter",
            "extra": "iterations: 82568104\ncpu: 1.6955651543118877 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.024382084874585,
            "unit": "ns/iter",
            "extra": "iterations: 15612559\ncpu: 8.975652229720954 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7353913019288647,
            "unit": "ns/iter",
            "extra": "iterations: 81431330\ncpu: 1.7048118948812456 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11125223596668776,
            "unit": "ms/iter",
            "extra": "iterations: 1253\ncpu: 0.10704118116520352 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21559856774449532,
            "unit": "ms/iter",
            "extra": "iterations: 647\ncpu: 0.2105310664605873 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11008158679257073,
            "unit": "ms/iter",
            "extra": "iterations: 1266\ncpu: 0.10740189573459716 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2173241227865219,
            "unit": "ms/iter",
            "extra": "iterations: 640\ncpu: 0.2109709375 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10923250453678642,
            "unit": "ms/iter",
            "extra": "iterations: 1270\ncpu: 0.1067818897637796 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.26757852639287666,
            "unit": "ms/iter",
            "extra": "iterations: 651\ncpu: 0.22145960061443937 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.492047082810175,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.441680952380952 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.579261779785156,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.533540000000034 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647039153981,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4307.918127620734,
            "unit": "ns/iter",
            "extra": "iterations: 28726\ncpu: 4298.927800598762 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.066794252979276,
            "unit": "ns/iter",
            "extra": "iterations: 42856574\ncpu: 2.737566003292751 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 90491.6599891591,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 90437.0816599732 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.8372640711576484,
            "unit": "ns/iter",
            "extra": "iterations: 50185507\ncpu: 2.83372249283045 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 847.7816998646707,
            "unit": "ns/iter",
            "extra": "iterations: 175251\ncpu: 799.3095617143409 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 25780.342013976962,
            "unit": "ns/iter",
            "extra": "iterations: 6930\ncpu: 20569.624819624827 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4289.554433207045,
            "unit": "ns/iter",
            "extra": "iterations: 41302\ncpu: 3600.610139944796 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 75809.83799134669,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 60900.89686098658 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 67.37018545684413,
            "unit": "ns/iter",
            "extra": "iterations: 2041292\ncpu: 67.1585446864045 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 552.357683762382,
            "unit": "ns/iter",
            "extra": "iterations: 352631\ncpu: 418.9302698855178 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 2769.972714527188,
            "unit": "ns/iter",
            "extra": "iterations: 84804\ncpu: 1369.937738785907 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 302.8391902376722,
            "unit": "ns/iter",
            "extra": "iterations: 462162\ncpu: 299.6364911005233 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1254.4545278653934,
            "unit": "ns/iter",
            "extra": "iterations: 113632\ncpu: 1246.8169177696427 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.0460451961241275,
            "unit": "ns/iter",
            "extra": "iterations: 45697573\ncpu: 2.763606286049371 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.7931532326334625,
            "unit": "ns/iter",
            "extra": "iterations: 50051839\ncpu: 2.770707385996347 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.64883280030371,
            "unit": "ns/iter",
            "extra": "iterations: 12022740\ncpu: 11.58046335527509 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.61070588389464,
            "unit": "ns/iter",
            "extra": "iterations: 58611003\ncpu: 2.590191128447332 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1775803913003351,
            "unit": "ms/iter",
            "extra": "iterations: 742\ncpu: 0.17165660377358488 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3419217984538433,
            "unit": "ms/iter",
            "extra": "iterations: 363\ncpu: 0.33434655647382927 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1752237008784806,
            "unit": "ms/iter",
            "extra": "iterations: 803\ncpu: 0.1720992528019925 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3567443918486173,
            "unit": "ms/iter",
            "extra": "iterations: 377\ncpu: 0.33403421750663115 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.17797064951894392,
            "unit": "ms/iter",
            "extra": "iterations: 838\ncpu: 0.17346312649164672 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.333893144285524,
            "unit": "ms/iter",
            "extra": "iterations: 385\ncpu: 0.3274535064935065 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 8.093158404032389,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 7.987444444444437 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 31.598687171936035,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 31.542399999999972 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da94697c017aaff539c4ec39c06abf09ae67bae6",
          "message": "AttributesProcessor dtor (#1263)",
          "timestamp": "2022-03-13T09:39:41-07:00",
          "tree_id": "dd37e98794badc023784ece3a4dbb8ec3dbb39d8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da94697c017aaff539c4ec39c06abf09ae67bae6"
        },
        "date": 1647190483703,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4903.424519685862,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 4884.612318729497 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.838360515211085,
            "unit": "ns/iter",
            "extra": "iterations: 50333278\ncpu: 2.835074639883379 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 89526.3995517438,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 87669.1827822832 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.807239003988011,
            "unit": "ns/iter",
            "extra": "iterations: 49479406\ncpu: 2.770089843034899 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 748.3012041150114,
            "unit": "ns/iter",
            "extra": "iterations: 193077\ncpu: 736.4522962341448 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 22566.681700146208,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 18645.699649501206 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3307.6641903746695,
            "unit": "ns/iter",
            "extra": "iterations: 43008\ncpu: 3173.660714285711 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60522.12809079768,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 55620.85747392824 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 62.61178256732154,
            "unit": "ns/iter",
            "extra": "iterations: 2259303\ncpu: 62.611787794731384 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 382.1246041154529,
            "unit": "ns/iter",
            "extra": "iterations: 362464\ncpu: 382.02745651981996 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1237.2518742503923,
            "unit": "ns/iter",
            "extra": "iterations: 113093\ncpu: 1237.255179365655 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 270.34622157314857,
            "unit": "ns/iter",
            "extra": "iterations: 519534\ncpu: 270.33399161556304 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1139.1627768320782,
            "unit": "ns/iter",
            "extra": "iterations: 123790\ncpu: 1139.0322320058158 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.281639173853854,
            "unit": "ns/iter",
            "extra": "iterations: 48868178\ncpu: 2.6423227810948875 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.458494356256623,
            "unit": "ns/iter",
            "extra": "iterations: 49884197\ncpu: 2.792812320903953 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 13.429066679542625,
            "unit": "ns/iter",
            "extra": "iterations: 13060920\ncpu: 10.841219454678537 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.0148440845867617,
            "unit": "ns/iter",
            "extra": "iterations: 60632308\ncpu: 2.3166164151297024 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1564664742829726,
            "unit": "ms/iter",
            "extra": "iterations: 877\ncpu: 0.15362690992018246 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.31060565795217243,
            "unit": "ms/iter",
            "extra": "iterations: 448\ncpu: 0.30477700892857146 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15803044692150045,
            "unit": "ms/iter",
            "extra": "iterations: 923\ncpu: 0.1538865655471289 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.31190668598989424,
            "unit": "ms/iter",
            "extra": "iterations: 445\ncpu: 0.3036525842696631 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1558445982460981,
            "unit": "ms/iter",
            "extra": "iterations: 899\ncpu: 0.15267230255839828 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 1.2152113326608318,
            "unit": "ms/iter",
            "extra": "iterations: 146\ncpu: 0.36008424657534255 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 16.14099282484788,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 7.174107692307691 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 39.813339710235596,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 28.754500000000014 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49648bd8f741a28a2b111c8d8ecad75a070ea649",
          "message": "Remove nostd::span as dependency from Dependency document (#1260)",
          "timestamp": "2022-03-13T13:19:09-07:00",
          "tree_id": "d98354c87d76ae368a9bc8c2089235ace5df9bf2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/49648bd8f741a28a2b111c8d8ecad75a070ea649"
        },
        "date": 1647203449606,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3730.9133183186113,
            "unit": "ns/iter",
            "extra": "iterations: 37588\ncpu: 3723.369160370332 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6188876417248916,
            "unit": "ns/iter",
            "extra": "iterations: 86890679\ncpu: 1.6114133484904636 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75837.10538360463,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 75741.2878787879 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.615158443685073,
            "unit": "ns/iter",
            "extra": "iterations: 86748541\ncpu: 1.6113100968464713 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 708.0820464401711,
            "unit": "ns/iter",
            "extra": "iterations: 207919\ncpu: 684.7493495062978 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17689.77764609532,
            "unit": "ns/iter",
            "extra": "iterations: 7957\ncpu: 17630.413472414228 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2702.6371911537453,
            "unit": "ns/iter",
            "extra": "iterations: 51519\ncpu: 2698.666511384148 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47004.405779390036,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 46597.36490993995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 46.76062999670848,
            "unit": "ns/iter",
            "extra": "iterations: 2997441\ncpu: 46.696231885798596 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 278.63433710174127,
            "unit": "ns/iter",
            "extra": "iterations: 503702\ncpu: 278.30622074162903 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 884.9615342913646,
            "unit": "ns/iter",
            "extra": "iterations: 158302\ncpu: 883.2939571199352 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 203.6152013339741,
            "unit": "ns/iter",
            "extra": "iterations: 688634\ncpu: 203.37450663197 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 842.4309951646707,
            "unit": "ns/iter",
            "extra": "iterations: 166753\ncpu: 838.2697762558996 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7293128455693239,
            "unit": "ns/iter",
            "extra": "iterations: 81296092\ncpu: 1.7185254120210354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.715188935441773,
            "unit": "ns/iter",
            "extra": "iterations: 81720330\ncpu: 1.7125934268743164 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.967775204204154,
            "unit": "ns/iter",
            "extra": "iterations: 15635977\ncpu: 8.951573668853568 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.689748493707612,
            "unit": "ns/iter",
            "extra": "iterations: 83041699\ncpu: 1.6883048117789599 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09710416089953632,
            "unit": "ms/iter",
            "extra": "iterations: 1382\ncpu: 0.09421353111432705 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.19230297445922515,
            "unit": "ms/iter",
            "extra": "iterations: 726\ncpu: 0.1872261707988981 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.0962056525766033,
            "unit": "ms/iter",
            "extra": "iterations: 1460\ncpu: 0.09410513698630141 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.18849828522426765,
            "unit": "ms/iter",
            "extra": "iterations: 743\ncpu: 0.18448115746971744 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.0953113235848337,
            "unit": "ms/iter",
            "extra": "iterations: 1466\ncpu: 0.09344317871759886 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.1875205097274882,
            "unit": "ms/iter",
            "extra": "iterations: 749\ncpu: 0.18354072096128177 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.77204426129659,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.722558333333331 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.65795071919759,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.626366666666655 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b1a74c7abd3375ef459b28f6b3536a42cf9e71a",
          "message": "Enable line-length lint for markdown docs (#1268)",
          "timestamp": "2022-03-16T07:17:12-07:00",
          "tree_id": "c63c50aa237422d2259c610614e4461ba2d6f3ef",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0b1a74c7abd3375ef459b28f6b3536a42cf9e71a"
        },
        "date": 1647441234969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3712.8714771685018,
            "unit": "ns/iter",
            "extra": "iterations: 37662\ncpu: 3709.824226010303 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.619096183048687,
            "unit": "ns/iter",
            "extra": "iterations: 86606331\ncpu: 1.6152352649600177 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76433.49792646326,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 76221.30434782612 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6213342007466072,
            "unit": "ns/iter",
            "extra": "iterations: 86621335\ncpu: 1.615462287668505 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 698.4468922522858,
            "unit": "ns/iter",
            "extra": "iterations: 205542\ncpu: 684.2689085442395 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17651.930526273336,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 17622.512562814063 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2720.0998858687267,
            "unit": "ns/iter",
            "extra": "iterations: 51491\ncpu: 2716.7621526091943 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46604.39061832237,
            "unit": "ns/iter",
            "extra": "iterations: 2998\ncpu: 46505.00333555702 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.02507394537379,
            "unit": "ns/iter",
            "extra": "iterations: 2645568\ncpu: 52.875790756465165 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 315.7649651562318,
            "unit": "ns/iter",
            "extra": "iterations: 444179\ncpu: 315.39086719543246 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1001.9094173341399,
            "unit": "ns/iter",
            "extra": "iterations: 139665\ncpu: 1001.1828303440377 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.42495728419902,
            "unit": "ns/iter",
            "extra": "iterations: 606305\ncpu: 230.21482587146744 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1127.6119073019831,
            "unit": "ns/iter",
            "extra": "iterations: 147571\ncpu: 949.820764242297 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7676276939659115,
            "unit": "ns/iter",
            "extra": "iterations: 82670981\ncpu: 1.6864260991411242 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.5300367498929206,
            "unit": "ns/iter",
            "extra": "iterations: 82422273\ncpu: 1.6915682487911978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 12.133497584539843,
            "unit": "ns/iter",
            "extra": "iterations: 15628087\ncpu: 8.953751025317434 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6931545658624445,
            "unit": "ns/iter",
            "extra": "iterations: 78291457\ncpu: 1.6863385234994417 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10877001490124302,
            "unit": "ms/iter",
            "extra": "iterations: 1282\ncpu: 0.10651591263650545 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21448325234569415,
            "unit": "ms/iter",
            "extra": "iterations: 653\ncpu: 0.20962526799387446 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10943245404224128,
            "unit": "ms/iter",
            "extra": "iterations: 1282\ncpu: 0.10710639625585022 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21575455285288805,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.209753527607362 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1086278260908415,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10617110766847405 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.22246237019546158,
            "unit": "ms/iter",
            "extra": "iterations: 655\ncpu: 0.20949725190839688 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.377772851423784,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.37113181818182 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.507783889770508,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.438399999999994 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bd2f963096cb242a119bdef52a885492a63e552",
          "message": "MetricStorage dtors (#1270)",
          "timestamp": "2022-03-17T17:10:32-07:00",
          "tree_id": "11e2680e64e0635b24e53ef1b3f094f3ad723c66",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6bd2f963096cb242a119bdef52a885492a63e552"
        },
        "date": 1647562962627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3746.1487367191417,
            "unit": "ns/iter",
            "extra": "iterations: 37400\ncpu: 3741.3663101604284 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6159501336056694,
            "unit": "ns/iter",
            "extra": "iterations: 86820090\ncpu: 1.6135723886026836 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 78314.70386402027,
            "unit": "ns/iter",
            "extra": "iterations: 1850\ncpu: 75740.21621621618 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6171628629643031,
            "unit": "ns/iter",
            "extra": "iterations: 86765745\ncpu: 1.6133244749987448 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 684.6078504809958,
            "unit": "ns/iter",
            "extra": "iterations: 208477\ncpu: 683.45620859855 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17800.862000017918,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 17609.839155566722 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2727.961196642031,
            "unit": "ns/iter",
            "extra": "iterations: 51281\ncpu: 2724.2272966595838 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46710.92265080806,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 46703.43187223918 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 105.34072930265226,
            "unit": "ns/iter",
            "extra": "iterations: 2566429\ncpu: 53.7162337239799 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 540.4222769781533,
            "unit": "ns/iter",
            "extra": "iterations: 437443\ncpu: 318.16716692231904 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1001.2230165571251,
            "unit": "ns/iter",
            "extra": "iterations: 139856\ncpu: 999.5659821530718 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 234.00566481487525,
            "unit": "ns/iter",
            "extra": "iterations: 597976\ncpu: 233.57592946874126 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.7859533617565,
            "unit": "ns/iter",
            "extra": "iterations: 147130\ncpu: 953.035410861143 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7646214275032557,
            "unit": "ns/iter",
            "extra": "iterations: 93823719\ncpu: 1.5005949614936922 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.5217092837381827,
            "unit": "ns/iter",
            "extra": "iterations: 93293528\ncpu: 1.4950018826600704 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.952411728389793,
            "unit": "ns/iter",
            "extra": "iterations: 17675250\ncpu: 7.91964470092361 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.4970154962013547,
            "unit": "ns/iter",
            "extra": "iterations: 91489515\ncpu: 1.494008357132509 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10967901584536956,
            "unit": "ms/iter",
            "extra": "iterations: 1253\ncpu: 0.1064343176376696 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21560556921745194,
            "unit": "ms/iter",
            "extra": "iterations: 647\ncpu: 0.2103938176197836 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11584394817411714,
            "unit": "ms/iter",
            "extra": "iterations: 1284\ncpu: 0.10647219626168225 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.6938519016388924,
            "unit": "ms/iter",
            "extra": "iterations: 186\ncpu: 0.23372365591397865 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12480798895268598,
            "unit": "ms/iter",
            "extra": "iterations: 1239\ncpu: 0.10737885391444715 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.22176679620888026,
            "unit": "ms/iter",
            "extra": "iterations: 591\ncpu: 0.21133316412859562 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.782358342950994,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.425886363636355 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.55718421936035,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.504979999999968 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647566997356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5152.906020310667,
            "unit": "ns/iter",
            "extra": "iterations: 31009\ncpu: 4531.88751652746 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.947405603872878,
            "unit": "ns/iter",
            "extra": "iterations: 71777204\ncpu: 1.9422684672977788 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 91811.6553986888,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 91189.70684039088 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.9556895855360388,
            "unit": "ns/iter",
            "extra": "iterations: 72011645\ncpu: 1.943277368542267 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 807.2542854326229,
            "unit": "ns/iter",
            "extra": "iterations: 173530\ncpu: 804.5156457096753 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21247.378947922214,
            "unit": "ns/iter",
            "extra": "iterations: 6629\ncpu: 21138.36174385278 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3248.167521446147,
            "unit": "ns/iter",
            "extra": "iterations: 43198\ncpu: 3246.7174406222484 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 60831.205532573666,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 56281.50958466455 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.80203716435253,
            "unit": "ns/iter",
            "extra": "iterations: 2194842\ncpu: 63.72763962052849 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 381.5919838020135,
            "unit": "ns/iter",
            "extra": "iterations: 365456\ncpu: 380.9886826321089 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1211.1263807943863,
            "unit": "ns/iter",
            "extra": "iterations: 115630\ncpu: 1207.4928651733976 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 277.59375415626795,
            "unit": "ns/iter",
            "extra": "iterations: 504374\ncpu: 277.1308592433394 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1148.393617434669,
            "unit": "ns/iter",
            "extra": "iterations: 122212\ncpu: 1146.8898307858476 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0459511050064463,
            "unit": "ns/iter",
            "extra": "iterations: 68787618\ncpu: 2.0324893355080276 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.036206039029141,
            "unit": "ns/iter",
            "extra": "iterations: 68834291\ncpu: 2.032193518198655 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.755303621931217,
            "unit": "ns/iter",
            "extra": "iterations: 13010548\ncpu: 10.750623263524332 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.0441060215012175,
            "unit": "ns/iter",
            "extra": "iterations: 68340354\ncpu: 2.034565112144431 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 7.502926720513238,
            "unit": "ms/iter",
            "extra": "iterations: 18\ncpu: 0.20096111111111106 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2621132593888503,
            "unit": "ms/iter",
            "extra": "iterations: 520\ncpu: 0.2533673076923077 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1295793815498495,
            "unit": "ms/iter",
            "extra": "iterations: 1068\ncpu: 0.12658183520599248 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2578355647899486,
            "unit": "ms/iter",
            "extra": "iterations: 540\ncpu: 0.24984740740740735 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1306221677732335,
            "unit": "ms/iter",
            "extra": "iterations: 1077\ncpu: 0.12685106778087274 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.26721424526638454,
            "unit": "ms/iter",
            "extra": "iterations: 549\ncpu: 0.2508105646630237 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.495152322869552,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.416378947368416 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 29.640722274780273,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.607340000000004 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e072daa229f72431b1c50986645d51180a586d09",
          "message": "install sdk config (#1273)",
          "timestamp": "2022-03-21T07:02:15-07:00",
          "tree_id": "24a560af6e4e7707f903df3142496e8ce3d3f8b1",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e072daa229f72431b1c50986645d51180a586d09"
        },
        "date": 1647872330079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5462.255591278291,
            "unit": "ns/iter",
            "extra": "iterations: 31292\ncpu: 4449.252205036431 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.8217920063588204,
            "unit": "ns/iter",
            "extra": "iterations: 54225524\ncpu: 2.689619006724582 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 148726.97401870464,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 94343.76199616127 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.6061767751650735,
            "unit": "ns/iter",
            "extra": "iterations: 49846544\ncpu: 2.7534366274219537 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1365.5566455127341,
            "unit": "ns/iter",
            "extra": "iterations: 180568\ncpu: 834.1688449780692 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20182.304332400887,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 20129.126072415296 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3375.707619419376,
            "unit": "ns/iter",
            "extra": "iterations: 40222\ncpu: 3367.438217890709 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 64449.48151064174,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 64302.57156720048 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 70.52881136946243,
            "unit": "ns/iter",
            "extra": "iterations: 2046033\ncpu: 70.25263033391934 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 404.29556824340614,
            "unit": "ns/iter",
            "extra": "iterations: 343918\ncpu: 402.9437249576935 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1315.3704923603975,
            "unit": "ns/iter",
            "extra": "iterations: 107333\ncpu: 1298.4981319817766 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 290.8686636227262,
            "unit": "ns/iter",
            "extra": "iterations: 488055\ncpu: 289.26514429726143 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1258.533739633539,
            "unit": "ns/iter",
            "extra": "iterations: 117959\ncpu: 1256.9553828024991 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.5148363544672545,
            "unit": "ns/iter",
            "extra": "iterations: 47840186\ncpu: 2.7198117498957886 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.559653601164737,
            "unit": "ns/iter",
            "extra": "iterations: 48538977\ncpu: 2.7366419362319894 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 15.290977985128524,
            "unit": "ns/iter",
            "extra": "iterations: 11384983\ncpu: 11.271356312082329 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.33489314647085,
            "unit": "ns/iter",
            "extra": "iterations: 57212212\ncpu: 2.3963362926782126 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.16672541284910916,
            "unit": "ms/iter",
            "extra": "iterations: 818\ncpu: 0.16255476772616137 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.349814988088721,
            "unit": "ms/iter",
            "extra": "iterations: 421\ncpu: 0.342121377672209 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.16844419062284052,
            "unit": "ms/iter",
            "extra": "iterations: 814\ncpu: 0.1652563882063882 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3506518956134444,
            "unit": "ms/iter",
            "extra": "iterations: 401\ncpu: 0.32175835411471326 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.16214633349637864,
            "unit": "ms/iter",
            "extra": "iterations: 857\ncpu: 0.1595842473745625 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.33325895115181253,
            "unit": "ms/iter",
            "extra": "iterations: 432\ncpu: 0.32462268518518506 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.44670315792686,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.420257894736835 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.820703506469727,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.67914000000003 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647971687548,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3720.2258256720734,
            "unit": "ns/iter",
            "extra": "iterations: 37679\ncpu: 3714.3103585551635 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6189176701569585,
            "unit": "ns/iter",
            "extra": "iterations: 86722210\ncpu: 1.6142600609463251 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76068.72190163954,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 75840.91155724361 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6152767719783547,
            "unit": "ns/iter",
            "extra": "iterations: 86833552\ncpu: 1.6123479550853803 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 671.6432812107436,
            "unit": "ns/iter",
            "extra": "iterations: 208092\ncpu: 670.0329661880319 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17659.492977127466,
            "unit": "ns/iter",
            "extra": "iterations: 7953\ncpu: 17615.780208726257 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3268.482683599926,
            "unit": "ns/iter",
            "extra": "iterations: 51232\ncpu: 2836.3190974391005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47464.234765823894,
            "unit": "ns/iter",
            "extra": "iterations: 2946\ncpu: 47006.7209775967 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 58.73140084228348,
            "unit": "ns/iter",
            "extra": "iterations: 2385704\ncpu: 58.643276785384955 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 322.2700684831076,
            "unit": "ns/iter",
            "extra": "iterations: 434878\ncpu: 321.9164915217601 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1006.5683007549637,
            "unit": "ns/iter",
            "extra": "iterations: 139502\ncpu: 1004.8458086622412 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 246.7098483181181,
            "unit": "ns/iter",
            "extra": "iterations: 568120\ncpu: 246.47979300147847 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 952.6700571807052,
            "unit": "ns/iter",
            "extra": "iterations: 147430\ncpu: 951.7886454588614 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6974561448770782,
            "unit": "ns/iter",
            "extra": "iterations: 82852983\ncpu: 1.6906585004911652 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.695868839565756,
            "unit": "ns/iter",
            "extra": "iterations: 82784883\ncpu: 1.6917484802146787 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.963541844036286,
            "unit": "ns/iter",
            "extra": "iterations: 15628227\ncpu: 8.95468180747567 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6946436501443771,
            "unit": "ns/iter",
            "extra": "iterations: 80391391\ncpu: 1.6907842781324682 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1100462940540391,
            "unit": "ms/iter",
            "extra": "iterations: 1235\ncpu: 0.1062531174089069 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21659919406023354,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.21016510903426794 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1091914649349248,
            "unit": "ms/iter",
            "extra": "iterations: 1292\ncpu: 0.10602352941176471 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21853468833713358,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.2107204892966362 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10922275593601277,
            "unit": "ms/iter",
            "extra": "iterations: 1287\ncpu: 0.10600139860139866 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2142488956451416,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.20779557926829267 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.465554237365723,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.406695454545454 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.556182861328125,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.53850000000004 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648048976698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5630.081232038231,
            "unit": "ns/iter",
            "extra": "iterations: 32847\ncpu: 4454.251529820076 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.8379049266840553,
            "unit": "ns/iter",
            "extra": "iterations: 47590720\ncpu: 2.8544010260823964 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 112616.84620056547,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 90292.94954721861 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.456957638282376,
            "unit": "ns/iter",
            "extra": "iterations: 43889074\ncpu: 2.7826401623328865 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 995.3278257556887,
            "unit": "ns/iter",
            "extra": "iterations: 186569\ncpu: 778.1383831183102 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 24834.06225754842,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 18670.49973132724 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4039.4978187569777,
            "unit": "ns/iter",
            "extra": "iterations: 42771\ncpu: 3218.6247691192657 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 71219.29033534734,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 56177.834645669325 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 66.93631953539054,
            "unit": "ns/iter",
            "extra": "iterations: 2151602\ncpu: 66.12802925448108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 383.1161857065803,
            "unit": "ns/iter",
            "extra": "iterations: 368128\ncpu: 382.52564325452016 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1229.9293958882872,
            "unit": "ns/iter",
            "extra": "iterations: 116202\ncpu: 1228.3205108345812 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 274.42197170248016,
            "unit": "ns/iter",
            "extra": "iterations: 515174\ncpu: 273.1830410696192 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1157.210576562661,
            "unit": "ns/iter",
            "extra": "iterations: 122612\ncpu: 1147.0166052262423 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.869087521352917,
            "unit": "ns/iter",
            "extra": "iterations: 43383545\ncpu: 2.852542363700339 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.727101462019947,
            "unit": "ns/iter",
            "extra": "iterations: 50924646\ncpu: 2.7117203720964502 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.780484429979065,
            "unit": "ns/iter",
            "extra": "iterations: 13516775\ncpu: 10.761006231146116 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.251384488695437,
            "unit": "ns/iter",
            "extra": "iterations: 62730760\ncpu: 2.246561336097315 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1617947669878398,
            "unit": "ms/iter",
            "extra": "iterations: 876\ncpu: 0.15635981735159818 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.32399162169425716,
            "unit": "ms/iter",
            "extra": "iterations: 434\ncpu: 0.3156536866359447 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15799624259483086,
            "unit": "ms/iter",
            "extra": "iterations: 852\ncpu: 0.1552512910798122 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3337714467113374,
            "unit": "ms/iter",
            "extra": "iterations: 442\ncpu: 0.32569095022624445 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.15560678169552217,
            "unit": "ms/iter",
            "extra": "iterations: 885\ncpu: 0.1525355932203389 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.30596018869639474,
            "unit": "ms/iter",
            "extra": "iterations: 462\ncpu: 0.29849307359307364 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.108951869763826,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.078089473684215 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.79347801208496,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 28.724740000000004 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139279016,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3747.4869431514308,
            "unit": "ns/iter",
            "extra": "iterations: 37758\ncpu: 3709.5926691032364 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6294301761941998,
            "unit": "ns/iter",
            "extra": "iterations: 86702338\ncpu: 1.6162366924868854 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76038.32126892719,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 75974.60661964193 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6181630897510673,
            "unit": "ns/iter",
            "extra": "iterations: 86584370\ncpu: 1.6173912219953783 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 678.992667241712,
            "unit": "ns/iter",
            "extra": "iterations: 207688\ncpu: 671.9304918916839 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18427.730698644747,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 17719.287238047422 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2723.0173382525845,
            "unit": "ns/iter",
            "extra": "iterations: 51251\ncpu: 2717.1079588690964 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46946.873210648904,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 46857.08515651293 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.90364770011868,
            "unit": "ns/iter",
            "extra": "iterations: 2644398\ncpu: 52.88489100354788 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.8130200964595,
            "unit": "ns/iter",
            "extra": "iterations: 443195\ncpu: 316.0615530409865 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1164.7205160811309,
            "unit": "ns/iter",
            "extra": "iterations: 139694\ncpu: 1005.585780348476 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 439.6906822389384,
            "unit": "ns/iter",
            "extra": "iterations: 605416\ncpu: 230.8097242226833 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 953.1554423688689,
            "unit": "ns/iter",
            "extra": "iterations: 147497\ncpu: 951.1027342929009 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.691003858936915,
            "unit": "ns/iter",
            "extra": "iterations: 83211983\ncpu: 1.6845037811441173 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6991686811231534,
            "unit": "ns/iter",
            "extra": "iterations: 82776073\ncpu: 1.6914030217403524 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 15.369924517422056,
            "unit": "ns/iter",
            "extra": "iterations: 15628593\ncpu: 8.967448317324532 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.710853369049858,
            "unit": "ns/iter",
            "extra": "iterations: 82264386\ncpu: 1.6939116278093904 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12925614270617472,
            "unit": "ms/iter",
            "extra": "iterations: 1082\ncpu: 0.13305323475046213 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2167915043077971,
            "unit": "ms/iter",
            "extra": "iterations: 646\ncpu: 0.21104349845201234 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1097412140064439,
            "unit": "ms/iter",
            "extra": "iterations: 1243\ncpu: 0.10730997586484313 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21629318869187056,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.2112427914110429 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10941307991743088,
            "unit": "ms/iter",
            "extra": "iterations: 1280\ncpu: 0.10687960937499993 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.4949631676396828,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.25056452599388385 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 10.717296600341797,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 7.260009999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 49.29089546203613,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 27.605299999999982 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648158640509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4106.849371904494,
            "unit": "ns/iter",
            "extra": "iterations: 34223\ncpu: 4103.497647780732 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.672125408690669,
            "unit": "ns/iter",
            "extra": "iterations: 52981135\ncpu: 2.672147359621496 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 92476.9924570939,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 92381.12276372612 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.6665877015570296,
            "unit": "ns/iter",
            "extra": "iterations: 52003046\ncpu: 2.652694613311691 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 713.7273329695901,
            "unit": "ns/iter",
            "extra": "iterations: 190778\ncpu: 713.679250228014 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17997.647119947702,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 17996.907087402957 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3257.283000548724,
            "unit": "ns/iter",
            "extra": "iterations: 45845\ncpu: 3257.297415203407 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 53345.05410127336,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 53332.90155440415 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 61.57709053636573,
            "unit": "ns/iter",
            "extra": "iterations: 2266036\ncpu: 61.17197608511075 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 362.2312463304551,
            "unit": "ns/iter",
            "extra": "iterations: 379403\ncpu: 360.8566616500134 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1205.4769489411133,
            "unit": "ns/iter",
            "extra": "iterations: 119191\ncpu: 1197.1256219009824 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 358.6380780782241,
            "unit": "ns/iter",
            "extra": "iterations: 520872\ncpu: 266.39519882043965 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1389.6320571915503,
            "unit": "ns/iter",
            "extra": "iterations: 128041\ncpu: 1115.2326208011502 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.426375737434173,
            "unit": "ns/iter",
            "extra": "iterations: 53615196\ncpu: 2.683390358211131 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.4240486161623362,
            "unit": "ns/iter",
            "extra": "iterations: 48921628\ncpu: 2.658253727778642 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 17.879938555913444,
            "unit": "ns/iter",
            "extra": "iterations: 13335365\ncpu: 10.586016955666379 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.9440339753447193,
            "unit": "ns/iter",
            "extra": "iterations: 62657202\ncpu: 2.3123024229521127 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1661120298029613,
            "unit": "ms/iter",
            "extra": "iterations: 809\ncpu: 0.1630409147095179 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.3060744358943059,
            "unit": "ms/iter",
            "extra": "iterations: 455\ncpu: 0.3007967032967033 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15228112886458048,
            "unit": "ms/iter",
            "extra": "iterations: 914\ncpu: 0.14953074398249452 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3029239916168483,
            "unit": "ms/iter",
            "extra": "iterations: 452\ncpu: 0.297716150442478 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.1653122927635876,
            "unit": "ms/iter",
            "extra": "iterations: 927\ncpu: 0.15061984897518876 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.8197502108687528,
            "unit": "ms/iter",
            "extra": "iterations: 277\ncpu: 0.4832357400722019 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.151031494140625,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 7.123140000000005 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.824831008911133,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.715059999999973 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c9ce393e0582a4e0559a73bd9a572cf324b7086",
          "message": "[Metrics SDK] - fix spelling (AggregationTemporarily to AggregationTemporality) (#1288)",
          "timestamp": "2022-03-24T16:47:49-07:00",
          "tree_id": "f4ae6ba4c2894ee8851934ef8f8120e7564a31fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2c9ce393e0582a4e0559a73bd9a572cf324b7086"
        },
        "date": 1648166391508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3869.5071573464684,
            "unit": "ns/iter",
            "extra": "iterations: 37505\ncpu: 3802.8502866284493 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6284719084825245,
            "unit": "ns/iter",
            "extra": "iterations: 86590261\ncpu: 1.617284650522072 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76278.38781957331,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 76027.56933115827 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7982694515027802,
            "unit": "ns/iter",
            "extra": "iterations: 86640633\ncpu: 1.6142125831421383 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 685.2920810328083,
            "unit": "ns/iter",
            "extra": "iterations: 206522\ncpu: 678.5998586107054 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17652.402310238693,
            "unit": "ns/iter",
            "extra": "iterations: 7941\ncpu: 17638.521596776212 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2851.309084978054,
            "unit": "ns/iter",
            "extra": "iterations: 49751\ncpu: 2829.953166770516 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 47764.93091808403,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 47266.037099494075 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 69.50707822915454,
            "unit": "ns/iter",
            "extra": "iterations: 2612901\ncpu: 53.62116666494444 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 444.54475804071996,
            "unit": "ns/iter",
            "extra": "iterations: 434083\ncpu: 323.0709334389967 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1227.0944617774696,
            "unit": "ns/iter",
            "extra": "iterations: 138985\ncpu: 1013.4510918444437 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 292.08255696108347,
            "unit": "ns/iter",
            "extra": "iterations: 596722\ncpu: 233.6929089257644 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1091.3069937492517,
            "unit": "ns/iter",
            "extra": "iterations: 145626\ncpu: 953.8509606800985 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7020142892157049,
            "unit": "ns/iter",
            "extra": "iterations: 88338665\ncpu: 1.6951286279909257 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.70332812966059,
            "unit": "ns/iter",
            "extra": "iterations: 82521868\ncpu: 1.6949180064610272 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.000796800828995,
            "unit": "ns/iter",
            "extra": "iterations: 15605684\ncpu: 8.97885667811805 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7079519629041526,
            "unit": "ns/iter",
            "extra": "iterations: 82431494\ncpu: 1.6978789684437843 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.6689283847808838,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.12572149999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.22183059704435568,
            "unit": "ms/iter",
            "extra": "iterations: 633\ncpu: 0.2128554502369669 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10967496782541275,
            "unit": "ms/iter",
            "extra": "iterations: 1280\ncpu: 0.10661703125000002 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.22457139117536054,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.21229797822706065 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10883005945148976,
            "unit": "ms/iter",
            "extra": "iterations: 1278\ncpu: 0.1060910015649453 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21484867877551905,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.2080076452599388 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.406437266956676,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.379418181818178 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.588631629943848,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 25.41985000000002 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648227354412,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4608.053105028966,
            "unit": "ns/iter",
            "extra": "iterations: 37283\ncpu: 3775.9354129227804 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.879768237499005,
            "unit": "ns/iter",
            "extra": "iterations: 46373586\ncpu: 3.021998341900926 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75522.76582397593,
            "unit": "ns/iter",
            "extra": "iterations: 1846\ncpu: 75368.03900325026 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.009845491509145,
            "unit": "ns/iter",
            "extra": "iterations: 46500505\ncpu: 3.0074748650579157 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 639.8149316016146,
            "unit": "ns/iter",
            "extra": "iterations: 215788\ncpu: 638.5934342966242 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16220.05509194214,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 16208.84369552586 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2870.550080143519,
            "unit": "ns/iter",
            "extra": "iterations: 47623\ncpu: 2868.8217877916127 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51874.4589885812,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 51570.544646165225 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 55.95202925524277,
            "unit": "ns/iter",
            "extra": "iterations: 2503577\ncpu: 55.87453471572875 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.75211807057553,
            "unit": "ns/iter",
            "extra": "iterations: 442084\ncpu: 316.8791451398377 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1018.7113596300348,
            "unit": "ns/iter",
            "extra": "iterations: 138270\ncpu: 1012.341795038692 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 247.1365434351585,
            "unit": "ns/iter",
            "extra": "iterations: 566978\ncpu: 246.77465439576144 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 963.725334465507,
            "unit": "ns/iter",
            "extra": "iterations: 144792\ncpu: 962.5221006685455 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 3.018837445100132,
            "unit": "ns/iter",
            "extra": "iterations: 46413096\ncpu: 3.01451771284553 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.0171691443741904,
            "unit": "ns/iter",
            "extra": "iterations: 46548124\ncpu: 3.0110966448400798 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 16.07943322976722,
            "unit": "ns/iter",
            "extra": "iterations: 15781138\ncpu: 8.836067462308488 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 5.326691212422497,
            "unit": "ns/iter",
            "extra": "iterations: 49466644\ncpu: 2.9114952694183183 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12756897718858456,
            "unit": "ms/iter",
            "extra": "iterations: 1094\ncpu: 0.12327431444241319 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.24968203779182913,
            "unit": "ms/iter",
            "extra": "iterations: 557\ncpu: 0.24289676840215443 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12584013347642747,
            "unit": "ms/iter",
            "extra": "iterations: 1121\ncpu: 0.12299197145405892 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2481828442003435,
            "unit": "ms/iter",
            "extra": "iterations: 547\ncpu: 0.24314076782449728 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12560845273642587,
            "unit": "ms/iter",
            "extra": "iterations: 1119\ncpu: 0.1231363717605005 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24817408626652107,
            "unit": "ms/iter",
            "extra": "iterations: 558\ncpu: 0.24311702508960578 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.367214863116924,
            "unit": "ms/iter",
            "extra": "iterations: 26\ncpu: 5.357957692307688 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 22.152145703633625,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 22.085350000000005 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648284007451,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4376.471422087123,
            "unit": "ns/iter",
            "extra": "iterations: 31416\ncpu: 4349.796282149224 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8321369722190688,
            "unit": "ns/iter",
            "extra": "iterations: 73367572\ncpu: 1.8314276503521205 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 82952.4718798124,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 82833.23317307694 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.7787891437866856,
            "unit": "ns/iter",
            "extra": "iterations: 77917163\ncpu: 1.7744999262871013 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 751.7734337301872,
            "unit": "ns/iter",
            "extra": "iterations: 189526\ncpu: 751.324884184756 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 19091.67308359284,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 19057.8120577413 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2965.0162599208747,
            "unit": "ns/iter",
            "extra": "iterations: 47806\ncpu: 2962.0528803915827 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 51897.93258063537,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 51826.89265536722 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 59.67348147011197,
            "unit": "ns/iter",
            "extra": "iterations: 2329230\ncpu: 59.55543248197903 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 355.304539602134,
            "unit": "ns/iter",
            "extra": "iterations: 423151\ncpu: 353.19897625197626 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1103.3996562922246,
            "unit": "ns/iter",
            "extra": "iterations: 122971\ncpu: 1102.3403891974526 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 252.8909700354353,
            "unit": "ns/iter",
            "extra": "iterations: 531551\ncpu: 252.6290045545959 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1040.5654730888682,
            "unit": "ns/iter",
            "extra": "iterations: 128932\ncpu: 1038.6288896472558 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.8382861571689688,
            "unit": "ns/iter",
            "extra": "iterations: 71189940\ncpu: 1.8363254695817979 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.890047144493569,
            "unit": "ns/iter",
            "extra": "iterations: 72075040\ncpu: 1.8862022136928405 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.789173364930644,
            "unit": "ns/iter",
            "extra": "iterations: 13633531\ncpu: 9.747775539586922 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8730488189958308,
            "unit": "ns/iter",
            "extra": "iterations: 75856501\ncpu: 1.8707137572823196 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1523545546125072,
            "unit": "ms/iter",
            "extra": "iterations: 1032\ncpu: 0.14654447674418605 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2679193853655925,
            "unit": "ms/iter",
            "extra": "iterations: 529\ncpu: 0.28072419659735354 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1418102275836956,
            "unit": "ms/iter",
            "extra": "iterations: 1001\ncpu: 0.1494387612387613 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.27143285515603055,
            "unit": "ms/iter",
            "extra": "iterations: 534\ncpu: 0.2930157303370787 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12337526337045138,
            "unit": "ms/iter",
            "extra": "iterations: 976\ncpu: 0.12163719262295086 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.24967965945391588,
            "unit": "ms/iter",
            "extra": "iterations: 568\ncpu: 0.24315774647887312 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.949329376220703,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 6.9022400000000035 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 27.44579315185547,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 27.373660000000037 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648602950721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3749.886322340339,
            "unit": "ns/iter",
            "extra": "iterations: 38284\ncpu: 3728.727405704733 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.264671647170562,
            "unit": "ns/iter",
            "extra": "iterations: 61698199\ncpu: 2.2615700662510423 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 79490.21680843004,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 79398.51930195662 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.4126707605628552,
            "unit": "ns/iter",
            "extra": "iterations: 60532688\ncpu: 2.396754626194694 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 689.5369380449839,
            "unit": "ns/iter",
            "extra": "iterations: 200255\ncpu: 688.6909190781752 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 16175.33037032204,
            "unit": "ns/iter",
            "extra": "iterations: 8700\ncpu: 16040.816091954017 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2800.123656514669,
            "unit": "ns/iter",
            "extra": "iterations: 50413\ncpu: 2798.446829190885 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 50896.460065789935,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 50820.470162748665 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 59.3778602888338,
            "unit": "ns/iter",
            "extra": "iterations: 2586987\ncpu: 59.18591782641351 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 349.5558784191765,
            "unit": "ns/iter",
            "extra": "iterations: 413984\ncpu: 348.67410334698934 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1115.617495467138,
            "unit": "ns/iter",
            "extra": "iterations: 124613\ncpu: 1114.112492276087 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 255.81114840698356,
            "unit": "ns/iter",
            "extra": "iterations: 568789\ncpu: 255.0021185360477 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1092.0584433336658,
            "unit": "ns/iter",
            "extra": "iterations: 133099\ncpu: 1048.6788029962654 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.6140709524748034,
            "unit": "ns/iter",
            "extra": "iterations: 53420638\ncpu: 2.5872772242068693 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3817174932186846,
            "unit": "ns/iter",
            "extra": "iterations: 62341641\ncpu: 2.375800470186532 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.443899526189702,
            "unit": "ns/iter",
            "extra": "iterations: 14266033\ncpu: 10.414205546839828 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1419122204452608,
            "unit": "ns/iter",
            "extra": "iterations: 69113277\ncpu: 2.1310738890300334 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14141324284795048,
            "unit": "ms/iter",
            "extra": "iterations: 999\ncpu: 0.13710400400400402 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.28818820599262224,
            "unit": "ms/iter",
            "extra": "iterations: 474\ncpu: 0.281298523206751 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.14422246424221968,
            "unit": "ms/iter",
            "extra": "iterations: 941\ncpu: 0.14152933049946873 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.27287096009218603,
            "unit": "ms/iter",
            "extra": "iterations: 532\ncpu: 0.26727218045112794 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14145591893069762,
            "unit": "ms/iter",
            "extra": "iterations: 1019\ncpu: 0.13777252208047108 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2834606701456328,
            "unit": "ms/iter",
            "extra": "iterations: 539\ncpu: 0.27702987012987 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.522437800531802,
            "unit": "ms/iter",
            "extra": "iterations: 23\ncpu: 6.5039260869565245 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.015281677246094,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.967560000000002 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648753564216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3852.963375156738,
            "unit": "ns/iter",
            "extra": "iterations: 37863\ncpu: 3845.9261019993132 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.410576810524805,
            "unit": "ns/iter",
            "extra": "iterations: 61011749\ncpu: 2.2728900953159044 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 83074.42981369642,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 82639.85969387756 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.347165989506855,
            "unit": "ns/iter",
            "extra": "iterations: 59502306\ncpu: 2.3271451025780423 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 700.0444693426085,
            "unit": "ns/iter",
            "extra": "iterations: 209073\ncpu: 699.2002793282725 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18309.420975119447,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 18308.147379346134 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2688.705836421417,
            "unit": "ns/iter",
            "extra": "iterations: 49230\ncpu: 2688.5699776558995 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 54022.527161413236,
            "unit": "ns/iter",
            "extra": "iterations: 2779\ncpu: 54023.46167686222 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 64.42123905561004,
            "unit": "ns/iter",
            "extra": "iterations: 2583498\ncpu: 53.02593615323101 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 389.8805855265857,
            "unit": "ns/iter",
            "extra": "iterations: 457167\ncpu: 330.62469513328836 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1273.5652923583984,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1059.2120000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 290.6107009988539,
            "unit": "ns/iter",
            "extra": "iterations: 592989\ncpu: 245.2600301186025 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1269.8101997375488,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1037.4280000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.940465637836391,
            "unit": "ns/iter",
            "extra": "iterations: 62796320\ncpu: 2.322765091967173 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 3.2140872094513444,
            "unit": "ns/iter",
            "extra": "iterations: 55688811\ncpu: 2.512946451666924 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 13.063764572143555,
            "unit": "ns/iter",
            "extra": "iterations: 10000000\ncpu: 10.48228 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 3.069338163621652,
            "unit": "ns/iter",
            "extra": "iterations: 61641152\ncpu: 2.3823305573523346 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.2876236325218564,
            "unit": "ms/iter",
            "extra": "iterations: 567\ncpu: 0.15114902998236332 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2932248292145906,
            "unit": "ms/iter",
            "extra": "iterations: 405\ncpu: 0.25938617283950616 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.3817177244595119,
            "unit": "ms/iter",
            "extra": "iterations: 448\ncpu: 0.14816651785714288 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3449409921592641,
            "unit": "ms/iter",
            "extra": "iterations: 428\ncpu: 0.2673742990654204 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.4908490455013582,
            "unit": "ms/iter",
            "extra": "iterations: 348\ncpu: 0.1385456896551725 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.4585092527824536,
            "unit": "ms/iter",
            "extra": "iterations: 456\ncpu: 0.2847598684210526 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 26.584704717000324,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 10.801049999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 58.321237564086914,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 31.307379999999995 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2034c9bcfa9cf6a995891efed36264088a333d37",
          "message": "Don't show coverage annotation for pull requests (#1304)",
          "timestamp": "2022-04-01T19:57:31+02:00",
          "tree_id": "472a4abf8828b68d3ea17a4767b6eb152308f526",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2034c9bcfa9cf6a995891efed36264088a333d37"
        },
        "date": 1648836573392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3741.2594609699963,
            "unit": "ns/iter",
            "extra": "iterations: 37504\ncpu: 3731.1326791808874 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.616934883537819,
            "unit": "ns/iter",
            "extra": "iterations: 86650286\ncpu: 1.6157015338645275 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75763.72508682903,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 75724.01297998922 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6213403444880174,
            "unit": "ns/iter",
            "extra": "iterations: 86662622\ncpu: 1.6158627187624217 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 671.7418503130796,
            "unit": "ns/iter",
            "extra": "iterations: 208925\ncpu: 671.7171233696304 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17723.494589425976,
            "unit": "ns/iter",
            "extra": "iterations: 7971\ncpu: 17633.534060971004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2706.020133867295,
            "unit": "ns/iter",
            "extra": "iterations: 51579\ncpu: 2701.582039202001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46485.831059155964,
            "unit": "ns/iter",
            "extra": "iterations: 3005\ncpu: 46485.823627287864 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.96151497301768,
            "unit": "ns/iter",
            "extra": "iterations: 2646303\ncpu: 52.86484578674475 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.7686034560289,
            "unit": "ns/iter",
            "extra": "iterations: 444480\ncpu: 315.1475881929446 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1010.618586429027,
            "unit": "ns/iter",
            "extra": "iterations: 139155\ncpu: 1003.643419208796 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.8045046018056,
            "unit": "ns/iter",
            "extra": "iterations: 607188\ncpu: 230.52678906697756 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1003.1854425893653,
            "unit": "ns/iter",
            "extra": "iterations: 147194\ncpu: 951.4545429840895 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7027602203228442,
            "unit": "ns/iter",
            "extra": "iterations: 82994931\ncpu: 1.6841124911592493 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6995823355063384,
            "unit": "ns/iter",
            "extra": "iterations: 82725205\ncpu: 1.6933158400755852 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.964680725416075,
            "unit": "ns/iter",
            "extra": "iterations: 15624965\ncpu: 8.956416862373775 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6887422521913882,
            "unit": "ns/iter",
            "extra": "iterations: 83067320\ncpu: 1.684418132184835 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11023155146216744,
            "unit": "ms/iter",
            "extra": "iterations: 1268\ncpu: 0.1063818611987382 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2166325619028034,
            "unit": "ms/iter",
            "extra": "iterations: 631\ncpu: 0.21099191759112523 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10830578516587223,
            "unit": "ms/iter",
            "extra": "iterations: 1294\ncpu: 0.10614057187017004 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2142172536732238,
            "unit": "ms/iter",
            "extra": "iterations: 648\ncpu: 0.20862237654321 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10813700387921878,
            "unit": "ms/iter",
            "extra": "iterations: 1278\ncpu: 0.10577065727699529 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21338752700202734,
            "unit": "ms/iter",
            "extra": "iterations: 658\ncpu: 0.20811626139817613 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.505586884238503,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.427768181818177 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.47321319580078,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.44871999999998 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648848050976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3723.6711853194847,
            "unit": "ns/iter",
            "extra": "iterations: 37531\ncpu: 3719.783645519704 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6120192170931051,
            "unit": "ns/iter",
            "extra": "iterations: 86904163\ncpu: 1.6107513744767328 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 80164.88557265275,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 76078.85032537961 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6110624426186824,
            "unit": "ns/iter",
            "extra": "iterations: 86910637\ncpu: 1.6102022126474576 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 683.8989670511655,
            "unit": "ns/iter",
            "extra": "iterations: 205201\ncpu: 683.3134341450574 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17715.74265838642,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 17665.24795982423 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2711.0401715442104,
            "unit": "ns/iter",
            "extra": "iterations: 51401\ncpu: 2709.826657068928 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46504.15040584827,
            "unit": "ns/iter",
            "extra": "iterations: 3007\ncpu: 46458.49684070499 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.99130527574597,
            "unit": "ns/iter",
            "extra": "iterations: 2643794\ncpu: 52.932414552722335 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.62624491536127,
            "unit": "ns/iter",
            "extra": "iterations: 441525\ncpu: 316.35196195005955 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1001.5525929981636,
            "unit": "ns/iter",
            "extra": "iterations: 140188\ncpu: 1000.8617000028534 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.83209882076304,
            "unit": "ns/iter",
            "extra": "iterations: 605971\ncpu: 230.5710999371256 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 946.4971039943855,
            "unit": "ns/iter",
            "extra": "iterations: 147857\ncpu: 945.8828462636194 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6912683907108539,
            "unit": "ns/iter",
            "extra": "iterations: 82429552\ncpu: 1.6899109193266026 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6923683313320397,
            "unit": "ns/iter",
            "extra": "iterations: 82766775\ncpu: 1.691022756414032 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.104924782662339,
            "unit": "ns/iter",
            "extra": "iterations: 15631315\ncpu: 8.96402509961574 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.523173185833684,
            "unit": "ns/iter",
            "extra": "iterations: 82747207\ncpu: 1.693655956266899 ns\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11105932877584698,
            "unit": "ms/iter",
            "extra": "iterations: 1254\ncpu: 0.10678708133971292 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21727107535335338,
            "unit": "ms/iter",
            "extra": "iterations: 638\ncpu: 0.21050156739811918 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1090216878612557,
            "unit": "ms/iter",
            "extra": "iterations: 1281\ncpu: 0.10624832162373148 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21425080955575365,
            "unit": "ms/iter",
            "extra": "iterations: 654\ncpu: 0.2088214067278288 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10842159624010045,
            "unit": "ms/iter",
            "extra": "iterations: 1276\ncpu: 0.10568205329153603 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21323343602622427,
            "unit": "ms/iter",
            "extra": "iterations: 656\ncpu: 0.2077664634146342 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.511861627752131,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.475613636363629 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.82845687866211,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.73342000000003 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48a40601061905542a52dd11109a868517a6e304",
          "message": "Add `async-changes` branch to pull_request of github action (#1309)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-04T13:09:48-07:00",
          "tree_id": "7e11595736b57f690103f0f4a25827ef3145b41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/48a40601061905542a52dd11109a868517a6e304"
        },
        "date": 1649103722802,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10909495013373895,
            "unit": "ms/iter",
            "extra": "iterations: 1247\ncpu: 0.1060410585404972 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2143619230288101,
            "unit": "ms/iter",
            "extra": "iterations: 646\ncpu: 0.20941795665634674 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10786544409491938,
            "unit": "ms/iter",
            "extra": "iterations: 1251\ncpu: 0.10577921662669865 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21317944382176254,
            "unit": "ms/iter",
            "extra": "iterations: 660\ncpu: 0.20846651515151512 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10752586218026969,
            "unit": "ms/iter",
            "extra": "iterations: 1300\ncpu: 0.1054794615384615 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2133071962800271,
            "unit": "ms/iter",
            "extra": "iterations: 662\ncpu: 0.2076867069486406 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.5818060012090776,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.548419047619047 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.517820358276367,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.492439999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 53.06925607209544,
            "unit": "ns/iter",
            "extra": "iterations: 2645468\ncpu: 52.88274135238075 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.22467946412223,
            "unit": "ns/iter",
            "extra": "iterations: 441674\ncpu: 317.21156327970397 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1003.0176058364646,
            "unit": "ns/iter",
            "extra": "iterations: 139640\ncpu: 1001.7466342022348 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 231.42752225856145,
            "unit": "ns/iter",
            "extra": "iterations: 609700\ncpu: 229.8809250451042 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 951.8896351851375,
            "unit": "ns/iter",
            "extra": "iterations: 147886\ncpu: 951.1319529908169 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6934938504323096,
            "unit": "ns/iter",
            "extra": "iterations: 83049088\ncpu: 1.690256971876681 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7056315867761225,
            "unit": "ns/iter",
            "extra": "iterations: 82715429\ncpu: 1.6919684959864019 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.984010212659442,
            "unit": "ns/iter",
            "extra": "iterations: 15623936\ncpu: 8.96013014902263 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6943096672544853,
            "unit": "ns/iter",
            "extra": "iterations: 80805749\ncpu: 1.6900307427383667 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3734.9308051936255,
            "unit": "ns/iter",
            "extra": "iterations: 37625\ncpu: 3723.712956810632 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6564770909655198,
            "unit": "ns/iter",
            "extra": "iterations: 85003552\ncpu: 1.648666399258233 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75796.89664408145,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 75628.29373650107 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6783955816731402,
            "unit": "ns/iter",
            "extra": "iterations: 85018522\ncpu: 1.6479232607689887 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 688.1999262505753,
            "unit": "ns/iter",
            "extra": "iterations: 205040\ncpu: 683.7017167381975 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17558.240932273173,
            "unit": "ns/iter",
            "extra": "iterations: 7991\ncpu: 17548.129145288443 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2704.3455199219015,
            "unit": "ns/iter",
            "extra": "iterations: 51889\ncpu: 2689.142207404266 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46567.6024719909,
            "unit": "ns/iter",
            "extra": "iterations: 3003\ncpu: 46436.896436896386 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be75bbc862a81319f8f9cae11c14f79f2c776aa9",
          "message": "Add InstrumentationInfo and Resource to the metrics data to be exported. (#1299)",
          "timestamp": "2022-04-04T22:09:02Z",
          "tree_id": "83c28eccef1b5a9839523c88c9f1175c1d2d7cc2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/be75bbc862a81319f8f9cae11c14f79f2c776aa9"
        },
        "date": 1649110814201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10119204048637871,
            "unit": "ms/iter",
            "extra": "iterations: 1332\ncpu: 0.09391989489489488 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.20381538956253617,
            "unit": "ms/iter",
            "extra": "iterations: 675\ncpu: 0.18476400000000007 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.23892608848777977,
            "unit": "ms/iter",
            "extra": "iterations: 925\ncpu: 0.1006187027027027 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.20123188312237078,
            "unit": "ms/iter",
            "extra": "iterations: 650\ncpu: 0.18525415384615376 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.18831944465637207,
            "unit": "ms/iter",
            "extra": "iterations: 1000\ncpu: 0.09761929999999996 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.20449967693081864,
            "unit": "ms/iter",
            "extra": "iterations: 695\ncpu: 0.18487438848920879 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.226013104120891,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.81589166666667 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.209400177001953,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 24.566800000000022 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 46.7934120992131,
            "unit": "ns/iter",
            "extra": "iterations: 2996890\ncpu: 46.70111348764886 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 280.0589858302234,
            "unit": "ns/iter",
            "extra": "iterations: 501762\ncpu: 279.7481674578784 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 892.0960877444066,
            "unit": "ns/iter",
            "extra": "iterations: 158194\ncpu: 886.2599087196735 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 203.28249394091569,
            "unit": "ns/iter",
            "extra": "iterations: 690887\ncpu: 203.14190308979613 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 850.154169470117,
            "unit": "ns/iter",
            "extra": "iterations: 167434\ncpu: 836.90648255432 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.5059894569196701,
            "unit": "ns/iter",
            "extra": "iterations: 93866495\ncpu: 1.4903027965409812 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.5973145415629246,
            "unit": "ns/iter",
            "extra": "iterations: 87433878\ncpu: 1.5093119854525958 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.949957104669781,
            "unit": "ns/iter",
            "extra": "iterations: 17687845\ncpu: 7.9117552194741645 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.4963609052590927,
            "unit": "ns/iter",
            "extra": "iterations: 91465008\ncpu: 1.4932136670233502 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3285.794185844234,
            "unit": "ns/iter",
            "extra": "iterations: 42687\ncpu: 3279.965797549606 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.425067195174911,
            "unit": "ns/iter",
            "extra": "iterations: 98022055\ncpu: 1.4236102273105782 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 67072.43436153259,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 66948.23135755255 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4307079690039424,
            "unit": "ns/iter",
            "extra": "iterations: 98211843\ncpu: 1.4281118825964798 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 604.4489694604482,
            "unit": "ns/iter",
            "extra": "iterations: 235467\ncpu: 603.8264385242943 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15594.51162894461,
            "unit": "ns/iter",
            "extra": "iterations: 9012\ncpu: 15568.109187749664 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2404.4788931903972,
            "unit": "ns/iter",
            "extra": "iterations: 58732\ncpu: 2402.4960839065584 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41120.50222374953,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 41046.89431851636 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649130880152,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1263938463928569,
            "unit": "ms/iter",
            "extra": "iterations: 1058\ncpu: 0.12317693761814748 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.26972240001513975,
            "unit": "ms/iter",
            "extra": "iterations: 487\ncpu: 0.25863162217659136 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1482321576374333,
            "unit": "ms/iter",
            "extra": "iterations: 1025\ncpu: 0.1384726829268293 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2711905882908748,
            "unit": "ms/iter",
            "extra": "iterations: 520\ncpu: 0.2666276923076923 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14293647467712015,
            "unit": "ms/iter",
            "extra": "iterations: 946\ncpu: 0.1408052854122622 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.276420287052944,
            "unit": "ms/iter",
            "extra": "iterations: 517\ncpu: 0.2714823984526113 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.400416294733684,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 6.388325000000009 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 25.439167022705078,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 25.140139999999978 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 55.93157056621855,
            "unit": "ns/iter",
            "extra": "iterations: 2730253\ncpu: 55.661947812162474 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 338.697923220819,
            "unit": "ns/iter",
            "extra": "iterations: 419929\ncpu: 337.50443527358203 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1111.1091551423565,
            "unit": "ns/iter",
            "extra": "iterations: 118456\ncpu: 1109.530965084082 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 241.3977510020428,
            "unit": "ns/iter",
            "extra": "iterations: 629584\ncpu: 240.5864825027319 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 980.6460328243487,
            "unit": "ns/iter",
            "extra": "iterations: 149822\ncpu: 977.9398219220145 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.208437987352501,
            "unit": "ns/iter",
            "extra": "iterations: 67285372\ncpu: 2.2050959308064764 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.27551103086834,
            "unit": "ns/iter",
            "extra": "iterations: 67398421\ncpu: 2.269437439788093 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.010812080130286,
            "unit": "ns/iter",
            "extra": "iterations: 13280338\ncpu: 9.847347258782118 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.1622828139544756,
            "unit": "ns/iter",
            "extra": "iterations: 67178825\ncpu: 2.1597207155677407 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 5679.043617189297,
            "unit": "ns/iter",
            "extra": "iterations: 34774\ncpu: 4389.230459538736 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 3.222275785689199,
            "unit": "ns/iter",
            "extra": "iterations: 53839734\ncpu: 2.6830165988561534 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 99004.61329091893,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 91365.41254125413 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 3.3082089500132748,
            "unit": "ns/iter",
            "extra": "iterations: 52564589\ncpu: 2.6388049947465584 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1084.6871505275162,
            "unit": "ns/iter",
            "extra": "iterations: 184931\ncpu: 809.2769735739278 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 24793.51338582168,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 19879.732313575525 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4354.369120900705,
            "unit": "ns/iter",
            "extra": "iterations: 43328\ncpu: 3174.9376846381106 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 68649.98718681459,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 51025.4449838187 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd338cc9f96cd2ad2af7b3bed496c10c22098582",
          "message": "Bump codecov/codecov-action from 2.1.0 to 3 (#1318)",
          "timestamp": "2022-04-05T23:05:14-07:00",
          "tree_id": "259c56f90bbd7d91b82098b8fd1c20ac74aa0074",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd338cc9f96cd2ad2af7b3bed496c10c22098582"
        },
        "date": 1649225801224,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.11061114058483115,
            "unit": "ms/iter",
            "extra": "iterations: 1249\ncpu: 0.10603186549239393 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21776292780139028,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.21016874027993782 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1097188538954522,
            "unit": "ms/iter",
            "extra": "iterations: 1282\ncpu: 0.10583759750390018 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21342186978911185,
            "unit": "ms/iter",
            "extra": "iterations: 653\ncpu: 0.20804854517611018 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10772765006456753,
            "unit": "ms/iter",
            "extra": "iterations: 1289\ncpu: 0.10505438324282391 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21326596004699613,
            "unit": "ms/iter",
            "extra": "iterations: 661\ncpu: 0.20699833585476557 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.511655720797452,
            "unit": "ms/iter",
            "extra": "iterations: 22\ncpu: 6.472818181818183 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.384449005126953,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.25352000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 46.72884208409595,
            "unit": "ns/iter",
            "extra": "iterations: 2996781\ncpu: 46.69944183442168 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 288.4700907730089,
            "unit": "ns/iter",
            "extra": "iterations: 500259\ncpu: 279.98616716540823 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 899.4057609719564,
            "unit": "ns/iter",
            "extra": "iterations: 158392\ncpu: 885.3439567654935 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 202.80623225340875,
            "unit": "ns/iter",
            "extra": "iterations: 692165\ncpu: 202.70470191356117 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 837.4570207500276,
            "unit": "ns/iter",
            "extra": "iterations: 166981\ncpu: 835.8034746468157 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6095480525089232,
            "unit": "ns/iter",
            "extra": "iterations: 94250072\ncpu: 1.4895882519856325 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.4951597875560603,
            "unit": "ns/iter",
            "extra": "iterations: 93760883\ncpu: 1.4923280959288747 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 7.90585000671026,
            "unit": "ns/iter",
            "extra": "iterations: 17727780\ncpu: 7.898163221790881 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.9276510094322894,
            "unit": "ns/iter",
            "extra": "iterations: 88848273\ncpu: 1.5030320285460126 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3318.4207978338864,
            "unit": "ns/iter",
            "extra": "iterations: 42154\ncpu: 3314.973667979314 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4274581377905469,
            "unit": "ns/iter",
            "extra": "iterations: 98402367\ncpu: 1.4227320365169673 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 67265.33530151076,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 66836.65871121715 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4255103699126954,
            "unit": "ns/iter",
            "extra": "iterations: 98376092\ncpu: 1.4229331248490746 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 602.6964198838891,
            "unit": "ns/iter",
            "extra": "iterations: 226158\ncpu: 602.1157774653116 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15560.10641836753,
            "unit": "ns/iter",
            "extra": "iterations: 9029\ncpu: 15528.342009081838 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2384.6592612742115,
            "unit": "ns/iter",
            "extra": "iterations: 58916\ncpu: 2377.9839092945886 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41001.13967214952,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 40984.09624413145 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74ec691e4a73c3160f2bb2aaf0a9626fb282beec",
          "message": "Move public definitions into `opentelemetry_api`. (#1314)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-06T23:06:59-07:00",
          "tree_id": "7bc735649612f995f158ea1b471f1b41e41e9667",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/74ec691e4a73c3160f2bb2aaf0a9626fb282beec"
        },
        "date": 1649312324290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10890344221643941,
            "unit": "ms/iter",
            "extra": "iterations: 1284\ncpu: 0.10637048286604364 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21484475925656185,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.20976042944785275 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10895098720331028,
            "unit": "ms/iter",
            "extra": "iterations: 1286\ncpu: 0.10639836702954895 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21511270379064998,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.2100557781201848 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10896837129600283,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10610542215336949 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.22230517956637597,
            "unit": "ms/iter",
            "extra": "iterations: 645\ncpu: 0.20879441860465123 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.648415610903785,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.521747619047621 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.672122955322266,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.604519999999972 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.956952158035655,
            "unit": "ns/iter",
            "extra": "iterations: 2643330\ncpu: 52.88450552901075 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.02601704106513,
            "unit": "ns/iter",
            "extra": "iterations: 442719\ncpu: 316.30108488680185 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1026.205295979306,
            "unit": "ns/iter",
            "extra": "iterations: 136567\ncpu: 1026.1424795155494 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.01392947364286,
            "unit": "ns/iter",
            "extra": "iterations: 608709\ncpu: 229.78664682138762 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 982.1058060631779,
            "unit": "ns/iter",
            "extra": "iterations: 148008\ncpu: 885.5386195340795 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6860193563469175,
            "unit": "ns/iter",
            "extra": "iterations: 82981157\ncpu: 1.6841558379331831 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7019875804731963,
            "unit": "ns/iter",
            "extra": "iterations: 82754544\ncpu: 1.6921318544151485 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.300012684633348,
            "unit": "ns/iter",
            "extra": "iterations: 15633008\ncpu: 8.95894123510971 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.83758222812596,
            "unit": "ns/iter",
            "extra": "iterations: 77798956\ncpu: 1.737768820445354 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3284.4804725387944,
            "unit": "ns/iter",
            "extra": "iterations: 42561\ncpu: 3273.5931956485992 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.423010089805567,
            "unit": "ns/iter",
            "extra": "iterations: 98312536\ncpu: 1.4180775481165495 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 66658.74452329292,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 66536.94418164618 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4306379653599655,
            "unit": "ns/iter",
            "extra": "iterations: 99426875\ncpu: 1.416240830258419 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 895.1536850130062,
            "unit": "ns/iter",
            "extra": "iterations: 222250\ncpu: 687.5163104611923 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 33063.9229341478,
            "unit": "ns/iter",
            "extra": "iterations: 7766\ncpu: 16882.281740921953 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4307.671533303753,
            "unit": "ns/iter",
            "extra": "iterations: 57015\ncpu: 2591.2338858195208 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 86724.79916997228,
            "unit": "ns/iter",
            "extra": "iterations: 2906\ncpu: 48295.04473503095 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b87300b5a354cf377f164eecd914e80171a69e6",
          "message": "Add building test without RTTI (#1294)",
          "timestamp": "2022-04-07T08:56:44-07:00",
          "tree_id": "52e8a0059af0fce5645e312e7435d156a955ccf8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6b87300b5a354cf377f164eecd914e80171a69e6"
        },
        "date": 1649347872959,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1703034963039373,
            "unit": "ms/iter",
            "extra": "iterations: 1057\ncpu: 0.11962507095553453 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.23931047190790591,
            "unit": "ms/iter",
            "extra": "iterations: 575\ncpu: 0.23369495652173916 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12257448159407897,
            "unit": "ms/iter",
            "extra": "iterations: 1134\ncpu: 0.12030008818342157 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2460800368210365,
            "unit": "ms/iter",
            "extra": "iterations: 580\ncpu: 0.2410591379310346 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12386760560159439,
            "unit": "ms/iter",
            "extra": "iterations: 1133\ncpu: 0.12120679611650478 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.23794511778164754,
            "unit": "ms/iter",
            "extra": "iterations: 565\ncpu: 0.23326283185840693 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.103085517883301,
            "unit": "ms/iter",
            "extra": "iterations: 20\ncpu: 7.094179999999994 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 29.435062408447266,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.415839999999967 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.25556988321855,
            "unit": "ns/iter",
            "extra": "iterations: 2185124\ncpu: 63.13632544423108 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 366.300469810747,
            "unit": "ns/iter",
            "extra": "iterations: 375431\ncpu: 365.7657465686106 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1183.3729123622065,
            "unit": "ns/iter",
            "extra": "iterations: 121889\ncpu: 1176.6796019329067 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 269.542977293732,
            "unit": "ns/iter",
            "extra": "iterations: 522187\ncpu: 267.73780274116353 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1077.972673685242,
            "unit": "ns/iter",
            "extra": "iterations: 129210\ncpu: 1077.9034130485256 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.9217090875395322,
            "unit": "ns/iter",
            "extra": "iterations: 72497540\ncpu: 1.9202086029401821 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.9343887372471444,
            "unit": "ns/iter",
            "extra": "iterations: 71621511\ncpu: 1.933022608249636 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.445467627375285,
            "unit": "ns/iter",
            "extra": "iterations: 14173641\ncpu: 10.178894752590388 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.867173271416201,
            "unit": "ns/iter",
            "extra": "iterations: 74386972\ncpu: 1.8661224710154896 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4316.223333341064,
            "unit": "ns/iter",
            "extra": "iterations: 32003\ncpu: 4310.2677873949315 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.8606309293261305,
            "unit": "ns/iter",
            "extra": "iterations: 74481951\ncpu: 1.8598062770938961 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 90850.08945239577,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 90578.84256378346 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.915150073669734,
            "unit": "ns/iter",
            "extra": "iterations: 73326455\ncpu: 1.913769048292325 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 776.8664618483217,
            "unit": "ns/iter",
            "extra": "iterations: 176519\ncpu: 776.0252437414667 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 20783.94030423939,
            "unit": "ns/iter",
            "extra": "iterations: 6758\ncpu: 20726.871855578585 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3307.015019840889,
            "unit": "ns/iter",
            "extra": "iterations: 44785\ncpu: 3304.751590934466 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 56850.355208697045,
            "unit": "ns/iter",
            "extra": "iterations: 2685\ncpu: 56645.21415270015 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649351805807,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13057413426312534,
            "unit": "ms/iter",
            "extra": "iterations: 1056\ncpu: 0.12698626893939394 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.25700372756080414,
            "unit": "ms/iter",
            "extra": "iterations: 539\ncpu: 0.25122467532467535 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12991284215173057,
            "unit": "ms/iter",
            "extra": "iterations: 1075\ncpu: 0.1268978604651163 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25463839840759167,
            "unit": "ms/iter",
            "extra": "iterations: 551\ncpu: 0.2496869328493649 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12903552526472237,
            "unit": "ms/iter",
            "extra": "iterations: 1083\ncpu: 0.12660397045244698 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5222170960669424,
            "unit": "ms/iter",
            "extra": "iterations: 510\ncpu: 0.2969154901960785 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.511990410940988,
            "unit": "ms/iter",
            "extra": "iterations: 14\ncpu: 7.473278571428567 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 30.516529083251953,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 30.493640000000035 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 80.1388342921656,
            "unit": "ns/iter",
            "extra": "iterations: 2202771\ncpu: 65.69552622583102 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 383.71421752723046,
            "unit": "ns/iter",
            "extra": "iterations: 366260\ncpu: 382.0613771637636 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1227.254462345598,
            "unit": "ns/iter",
            "extra": "iterations: 114288\ncpu: 1225.6536119277612 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 277.4466441084743,
            "unit": "ns/iter",
            "extra": "iterations: 505481\ncpu: 277.0117966847419 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1501.5085433512913,
            "unit": "ns/iter",
            "extra": "iterations: 122569\ncpu: 1196.2486436211445 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0287623808423616,
            "unit": "ns/iter",
            "extra": "iterations: 68885773\ncpu: 2.027060072331627 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.043922832597702,
            "unit": "ns/iter",
            "extra": "iterations: 68934616\ncpu: 2.0311653001737184 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.77775672480089,
            "unit": "ns/iter",
            "extra": "iterations: 13030407\ncpu: 10.747477035828581 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.0266877102202208,
            "unit": "ns/iter",
            "extra": "iterations: 67807775\ncpu: 2.026092140613668 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4523.298014105343,
            "unit": "ns/iter",
            "extra": "iterations: 31419\ncpu: 4453.830484738534 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9525848265424266,
            "unit": "ns/iter",
            "extra": "iterations: 72269255\ncpu: 1.9365648642704292 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 91089.97644502416,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 90885.78844905907 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.947828043402006,
            "unit": "ns/iter",
            "extra": "iterations: 72183925\ncpu: 1.9398751176248732 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 821.4202091535722,
            "unit": "ns/iter",
            "extra": "iterations: 173210\ncpu: 807.1358466601238 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21258.983971937647,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 21150.64150943396 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3266.654633224208,
            "unit": "ns/iter",
            "extra": "iterations: 42902\ncpu: 3251.543051605984 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55989.09041729988,
            "unit": "ns/iter",
            "extra": "iterations: 2501\ncpu: 55800.11995201913 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d72dcb69b07ffe773e490ee797126357480b9cb0",
          "message": "[ETW Exporter] - ETW provider handle cleanup (#1322)",
          "timestamp": "2022-04-11T00:45:36-07:00",
          "tree_id": "75feeddd4fd22f74bedd9796d4dfee51734f4a4c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/d72dcb69b07ffe773e490ee797126357480b9cb0"
        },
        "date": 1649663865906,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10939045522197988,
            "unit": "ms/iter",
            "extra": "iterations: 1272\ncpu: 0.10622869496855347 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21416789914932718,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.2094328220858896 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1087736062966432,
            "unit": "ms/iter",
            "extra": "iterations: 1285\ncpu: 0.10635439688715954 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.2143680590143189,
            "unit": "ms/iter",
            "extra": "iterations: 649\ncpu: 0.2095277349768875 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.12603450465846705,
            "unit": "ms/iter",
            "extra": "iterations: 1295\ncpu: 0.10724787644787649 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.8211777760432317,
            "unit": "ms/iter",
            "extra": "iterations: 130\ncpu: 0.4165800000000006 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 14.146828651428223,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 7.39529000000001 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 35.591959953308105,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 27.01842500000001 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 75.4237636356656,
            "unit": "ns/iter",
            "extra": "iterations: 2640403\ncpu: 52.9969478144056 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 317.330641868968,
            "unit": "ns/iter",
            "extra": "iterations: 441723\ncpu: 316.5721504200597 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1005.8420607877866,
            "unit": "ns/iter",
            "extra": "iterations: 139424\ncpu: 1004.5142873536842 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.81740372307735,
            "unit": "ns/iter",
            "extra": "iterations: 607842\ncpu: 230.49937319237566 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1007.1698352518423,
            "unit": "ns/iter",
            "extra": "iterations: 147667\ncpu: 956.2881347897635 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.7026269172836237,
            "unit": "ns/iter",
            "extra": "iterations: 82340348\ncpu: 1.6904944341503148 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7111657622209213,
            "unit": "ns/iter",
            "extra": "iterations: 82766286\ncpu: 1.6955877420910248 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.800554143804163,
            "unit": "ns/iter",
            "extra": "iterations: 15597669\ncpu: 8.972372730822794 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.8881779516569777,
            "unit": "ns/iter",
            "extra": "iterations: 82775094\ncpu: 1.695350536237386 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3734.0321536369543,
            "unit": "ns/iter",
            "extra": "iterations: 37395\ncpu: 3729.985292151357 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6174408199583574,
            "unit": "ns/iter",
            "extra": "iterations: 86673889\ncpu: 1.6145369916423153 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76136.63820876289,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 75832.44709712427 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6181076636062262,
            "unit": "ns/iter",
            "extra": "iterations: 86507328\ncpu: 1.6164988935966218 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 676.6213905379826,
            "unit": "ns/iter",
            "extra": "iterations: 208258\ncpu: 672.7611904464652 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17584.794722263166,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 17572.69182389938 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2738.3828420690734,
            "unit": "ns/iter",
            "extra": "iterations: 51286\ncpu: 2731.447178567251 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46977.177837158124,
            "unit": "ns/iter",
            "extra": "iterations: 2981\ncpu: 46768.970144246894 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649689752225,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.13078752007384906,
            "unit": "ms/iter",
            "extra": "iterations: 1054\ncpu: 0.12697979127134726 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2554788518307814,
            "unit": "ms/iter",
            "extra": "iterations: 536\ncpu: 0.25032593283582094 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.13001907292013928,
            "unit": "ms/iter",
            "extra": "iterations: 1078\ncpu: 0.12732764378478661 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25939419321770213,
            "unit": "ms/iter",
            "extra": "iterations: 548\ncpu: 0.250769890510949 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14128856100599307,
            "unit": "ms/iter",
            "extra": "iterations: 1059\ncpu: 0.12789320113314448 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.692580918134269,
            "unit": "ms/iter",
            "extra": "iterations: 295\ncpu: 0.3182240677966102 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 12.90583610534668,
            "unit": "ms/iter",
            "extra": "iterations: 9\ncpu: 8.046466666666653 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 73.12401135762532,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 28.2441666666667 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 67.95324349228805,
            "unit": "ns/iter",
            "extra": "iterations: 2077774\ncpu: 67.32859300385894 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 384.65857333816035,
            "unit": "ns/iter",
            "extra": "iterations: 363903\ncpu: 384.15127108048034 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1226.3957123565647,
            "unit": "ns/iter",
            "extra": "iterations: 114084\ncpu: 1224.7352827740965 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 288.44465736866226,
            "unit": "ns/iter",
            "extra": "iterations: 485863\ncpu: 288.01246441898235 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1205.0014210006743,
            "unit": "ns/iter",
            "extra": "iterations: 121310\ncpu: 1153.1778089192978 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0346672068762848,
            "unit": "ns/iter",
            "extra": "iterations: 68679297\ncpu: 2.0288457524543384 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.03286122862139,
            "unit": "ns/iter",
            "extra": "iterations: 68930543\ncpu: 2.030451145582881 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.757828906788669,
            "unit": "ns/iter",
            "extra": "iterations: 13025800\ncpu: 10.746372583641696 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.607254642654323,
            "unit": "ns/iter",
            "extra": "iterations: 68565943\ncpu: 2.090323471522882 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4499.4538943843645,
            "unit": "ns/iter",
            "extra": "iterations: 31394\ncpu: 4465.315028349367 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.939431980627839,
            "unit": "ns/iter",
            "extra": "iterations: 72209987\ncpu: 1.9377652013702757 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 133728.44981022307,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 92163.69593709041 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.31032933703536,
            "unit": "ns/iter",
            "extra": "iterations: 71488753\ncpu: 1.9510271776596804 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 822.7958454214047,
            "unit": "ns/iter",
            "extra": "iterations: 173453\ncpu: 820.9422725464535 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21213.94338959406,
            "unit": "ns/iter",
            "extra": "iterations: 6645\ncpu: 21124.48457486833 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3240.772356709102,
            "unit": "ns/iter",
            "extra": "iterations: 43240\ncpu: 3238.2354301572595 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55942.371237077554,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 55810.008006405136 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649787957122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 1.4771269363107034,
            "unit": "ms/iter",
            "extra": "iterations: 206\ncpu: 0.13796699029126214 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 2.9463249704112178,
            "unit": "ms/iter",
            "extra": "iterations: 92\ncpu: 0.29269021739130435 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 2.946163478650545,
            "unit": "ms/iter",
            "extra": "iterations: 57\ncpu: 0.15294035087719285 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.5068640491279823,
            "unit": "ms/iter",
            "extra": "iterations: 241\ncpu: 0.3011684647302904 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.8838350122625177,
            "unit": "ms/iter",
            "extra": "iterations: 220\ncpu: 0.14073590909090902 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.48391839975485706,
            "unit": "ms/iter",
            "extra": "iterations: 341\ncpu: 0.2764211143695015 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 25.12970337500939,
            "unit": "ms/iter",
            "extra": "iterations: 13\ncpu: 8.546469230769235 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 41.884541511535645,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 29.902175000000003 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 63.358757053933964,
            "unit": "ns/iter",
            "extra": "iterations: 2206973\ncpu: 63.319759688949524 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 378.57096119515404,
            "unit": "ns/iter",
            "extra": "iterations: 369443\ncpu: 377.63173209399014 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1190.8492615791042,
            "unit": "ns/iter",
            "extra": "iterations: 116177\ncpu: 1182.546459281958 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 275.7241550198155,
            "unit": "ns/iter",
            "extra": "iterations: 508088\ncpu: 275.5928106942104 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1133.6708385362385,
            "unit": "ns/iter",
            "extra": "iterations: 123535\ncpu: 1133.2796373497386 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0389464495035963,
            "unit": "ns/iter",
            "extra": "iterations: 68963479\ncpu: 2.035304802415783 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.037458257397357,
            "unit": "ns/iter",
            "extra": "iterations: 68867813\ncpu: 2.035135049228295 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.816606971220764,
            "unit": "ns/iter",
            "extra": "iterations: 12989182\ncpu: 10.747928545461907 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.9461728680082078,
            "unit": "ns/iter",
            "extra": "iterations: 67240129\ncpu: 2.051163524686278 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 6163.5851559751945,
            "unit": "ns/iter",
            "extra": "iterations: 31361\ncpu: 4509.572398839323 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.7916120034765344,
            "unit": "ns/iter",
            "extra": "iterations: 71442423\ncpu: 1.9658613762301982 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 124203.97804375927,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 91880.22412656563 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.764414696914306,
            "unit": "ns/iter",
            "extra": "iterations: 71632138\ncpu: 1.9622588955811977 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1134.0252733837738,
            "unit": "ns/iter",
            "extra": "iterations: 171133\ncpu: 820.6044421590224 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 29398.813907602267,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 21447.2290263319 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 4019.312701810027,
            "unit": "ns/iter",
            "extra": "iterations: 41670\ncpu: 3316.294696424287 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 82689.88763953431,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 58216.13424989888 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da2911cf4458c7068f967c17c65d07eeba449a08",
          "message": "Prepare v1.3.0 release (#1324)",
          "timestamp": "2022-04-12T12:46:07-07:00",
          "tree_id": "c6220ed40da1d737bd27e307c20025ace70dee7c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da2911cf4458c7068f967c17c65d07eeba449a08"
        },
        "date": 1649793485171,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.1093314595199658,
            "unit": "ms/iter",
            "extra": "iterations: 1254\ncpu: 0.10576985645933015 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2246246307711058,
            "unit": "ms/iter",
            "extra": "iterations: 632\ncpu: 0.21061867088607603 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.11464590993064212,
            "unit": "ms/iter",
            "extra": "iterations: 1291\ncpu: 0.10795972114639814 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21292852318805197,
            "unit": "ms/iter",
            "extra": "iterations: 621\ncpu: 0.20858148148148148 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.16379981382865583,
            "unit": "ms/iter",
            "extra": "iterations: 1297\ncpu: 0.10627548188126447 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2183416550775926,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.21110669781931463 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.5216791062127974,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.500609523809518 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.4373779296875,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.353300000000026 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.99259497584054,
            "unit": "ns/iter",
            "extra": "iterations: 2644508\ncpu: 52.87195198501952 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.7020977294291,
            "unit": "ns/iter",
            "extra": "iterations: 442154\ncpu: 316.67948271416753 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1004.6065911587076,
            "unit": "ns/iter",
            "extra": "iterations: 139445\ncpu: 1003.1790311592382 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 237.6813010005772,
            "unit": "ns/iter",
            "extra": "iterations: 608595\ncpu: 230.4636088038842 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1045.5709969956122,
            "unit": "ns/iter",
            "extra": "iterations: 148131\ncpu: 947.2480439610887 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6869462296497908,
            "unit": "ns/iter",
            "extra": "iterations: 83057957\ncpu: 1.6849764315777713 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.7036922935885441,
            "unit": "ns/iter",
            "extra": "iterations: 82785373\ncpu: 1.6920984338622234 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.96453191455771,
            "unit": "ns/iter",
            "extra": "iterations: 15637618\ncpu: 8.952412061734725 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7030427696227215,
            "unit": "ns/iter",
            "extra": "iterations: 81933154\ncpu: 1.699583052789594 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3759.9024842861027,
            "unit": "ns/iter",
            "extra": "iterations: 37350\ncpu: 3744.9022757697467 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6162866747404308,
            "unit": "ns/iter",
            "extra": "iterations: 86634736\ncpu: 1.6155748428667227 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 98084.26441768352,
            "unit": "ns/iter",
            "extra": "iterations: 1842\ncpu: 75978.82736156356 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6537373561647928,
            "unit": "ns/iter",
            "extra": "iterations: 86652967\ncpu: 1.6142055470529943 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 685.454285489901,
            "unit": "ns/iter",
            "extra": "iterations: 205398\ncpu: 684.4910855996652 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18005.546748585875,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 17652.888109259482 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2720.8671740545883,
            "unit": "ns/iter",
            "extra": "iterations: 51169\ncpu: 2714.755027458031 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46922.60726769391,
            "unit": "ns/iter",
            "extra": "iterations: 2969\ncpu: 46870.66352307175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649799942925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10956029410617961,
            "unit": "ms/iter",
            "extra": "iterations: 1268\ncpu: 0.10704597791798107 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21597279858551743,
            "unit": "ms/iter",
            "extra": "iterations: 637\ncpu: 0.21015965463108316 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10971866180491616,
            "unit": "ms/iter",
            "extra": "iterations: 1277\ncpu: 0.10726562255285825 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21540606680091906,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.2103834355828221 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10956803926406465,
            "unit": "ms/iter",
            "extra": "iterations: 1273\ncpu: 0.10672160251374704 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3084708576553438,
            "unit": "ms/iter",
            "extra": "iterations: 652\ncpu: 0.2100127300613497 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.675020318282278,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 6.657199999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.16572380065918,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 25.665675 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.96221764553692,
            "unit": "ns/iter",
            "extra": "iterations: 2641181\ncpu: 52.894633120562354 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 319.90178128368643,
            "unit": "ns/iter",
            "extra": "iterations: 442877\ncpu: 317.3057079053553 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1004.9057720691656,
            "unit": "ns/iter",
            "extra": "iterations: 139473\ncpu: 1003.1848458124509 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 232.97483295220357,
            "unit": "ns/iter",
            "extra": "iterations: 607549\ncpu: 230.70632985981376 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 954.1947262039889,
            "unit": "ns/iter",
            "extra": "iterations: 147978\ncpu: 947.6685723553495 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6970420999707794,
            "unit": "ns/iter",
            "extra": "iterations: 82654875\ncpu: 1.694861918307904 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.6999772629917551,
            "unit": "ns/iter",
            "extra": "iterations: 82656339\ncpu: 1.6954077774966543 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 8.969540770209964,
            "unit": "ns/iter",
            "extra": "iterations: 15621496\ncpu: 8.962477089262133 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6953230089235314,
            "unit": "ns/iter",
            "extra": "iterations: 82906464\ncpu: 1.693051340363521 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3934.2159928612177,
            "unit": "ns/iter",
            "extra": "iterations: 37754\ncpu: 3706.478783705038 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6525100361455476,
            "unit": "ns/iter",
            "extra": "iterations: 84885011\ncpu: 1.6486220399971439 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 76908.69884573536,
            "unit": "ns/iter",
            "extra": "iterations: 1848\ncpu: 75784.46969696973 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6572701794711948,
            "unit": "ns/iter",
            "extra": "iterations: 85051061\ncpu: 1.6473950865821647 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 689.2036784313985,
            "unit": "ns/iter",
            "extra": "iterations: 208840\ncpu: 684.2209346868415 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 18615.36922167294,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 17624.20854271356 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2755.691769781047,
            "unit": "ns/iter",
            "extra": "iterations: 51882\ncpu: 2722.435526772288 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 46702.15163001402,
            "unit": "ns/iter",
            "extra": "iterations: 2992\ncpu: 46621.92513368991 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67091862+juandemanjon@users.noreply.github.com",
            "name": "jmanjon",
            "username": "juandemanjon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7f051edf72c6b162ba27fe624d2a6a05e2210d6",
          "message": "Fix for #1292 (#1326)",
          "timestamp": "2022-04-14T09:51:47+05:30",
          "tree_id": "f9d4980e62b4f95b38ab8db49781e7157f1d219c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e7f051edf72c6b162ba27fe624d2a6a05e2210d6"
        },
        "date": 1649910945267,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.12842557276156466,
            "unit": "ms/iter",
            "extra": "iterations: 1052\ncpu: 0.1246745247148289 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2569916915196169,
            "unit": "ms/iter",
            "extra": "iterations: 547\ncpu: 0.2505764168190128 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.12782482017369695,
            "unit": "ms/iter",
            "extra": "iterations: 1087\ncpu: 0.12490616375344983 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.25363072105076,
            "unit": "ms/iter",
            "extra": "iterations: 552\ncpu: 0.2476920289855073 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.19448441885859588,
            "unit": "ms/iter",
            "extra": "iterations: 1098\ncpu: 0.1323330601092896 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.25494514255348694,
            "unit": "ms/iter",
            "extra": "iterations: 545\ncpu: 0.24927633027522947 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.4541066822252775,
            "unit": "ms/iter",
            "extra": "iterations: 19\ncpu: 7.445047368421051 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 31.073713302612305,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 29.910239999999977 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 62.3207003261213,
            "unit": "ns/iter",
            "extra": "iterations: 2238925\ncpu: 62.23174067912056 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 374.12670109000356,
            "unit": "ns/iter",
            "extra": "iterations: 373585\ncpu: 373.67399654697067 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1203.4916377338936,
            "unit": "ns/iter",
            "extra": "iterations: 116587\ncpu: 1202.3956358770706 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 275.04332661940833,
            "unit": "ns/iter",
            "extra": "iterations: 517533\ncpu: 273.41831342155973 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1150.7787484228188,
            "unit": "ns/iter",
            "extra": "iterations: 124016\ncpu: 1136.614630370275 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.0222075950502676,
            "unit": "ns/iter",
            "extra": "iterations: 69096562\ncpu: 2.0203653547914584 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.0083576607416633,
            "unit": "ns/iter",
            "extra": "iterations: 69989152\ncpu: 1.9935803765703577 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 10.63575840542676,
            "unit": "ns/iter",
            "extra": "iterations: 13016233\ncpu: 10.569901445372098 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.987749663038542,
            "unit": "ns/iter",
            "extra": "iterations: 69802111\ncpu: 1.9873797226562389 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4493.8675752718245,
            "unit": "ns/iter",
            "extra": "iterations: 31258\ncpu: 4478.712649561712 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.9513476260564109,
            "unit": "ns/iter",
            "extra": "iterations: 72090628\ncpu: 1.9221777343928816 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 143781.62829772287,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 92313.85869565213 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 4.210220385135978,
            "unit": "ns/iter",
            "extra": "iterations: 70779996\ncpu: 2.0422097791585068 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 1235.7531336603126,
            "unit": "ns/iter",
            "extra": "iterations: 169759\ncpu: 829.6243498135598 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 21423.924515607392,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 21096.649135987966 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3250.1376163499363,
            "unit": "ns/iter",
            "extra": "iterations: 43187\ncpu: 3228.411327482805 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 57408.94645941062,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 57260.57377049183 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649955954217,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 2.189164161682129,
            "unit": "ms/iter",
            "extra": "iterations: 100\ncpu: 0.127047 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.2171228236498491,
            "unit": "ms/iter",
            "extra": "iterations: 642\ncpu: 0.21093971962616825 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.1095583899241976,
            "unit": "ms/iter",
            "extra": "iterations: 1274\ncpu: 0.10721240188383047 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.24035279712979757,
            "unit": "ms/iter",
            "extra": "iterations: 630\ncpu: 0.21111444444444447 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.3774357825210414,
            "unit": "ms/iter",
            "extra": "iterations: 485\ncpu: 0.11292907216494857 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.2321508568777165,
            "unit": "ms/iter",
            "extra": "iterations: 568\ncpu: 0.21008943661971843 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 7.383040019444057,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.69757142857143 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 28.425872325897217,
            "unit": "ms/iter",
            "extra": "iterations: 4\ncpu: 26.900574999999982 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.928269729076646,
            "unit": "ns/iter",
            "extra": "iterations: 2641848\ncpu: 52.92136413601388 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 316.4355220837708,
            "unit": "ns/iter",
            "extra": "iterations: 442366\ncpu: 316.4320946908217 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 998.3193607281089,
            "unit": "ns/iter",
            "extra": "iterations: 140242\ncpu: 998.0847392364625 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.1116186544939,
            "unit": "ns/iter",
            "extra": "iterations: 608606\ncpu: 230.11012050489137 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 946.4681724053305,
            "unit": "ns/iter",
            "extra": "iterations: 147892\ncpu: 946.3676196143138 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6917356299174984,
            "unit": "ns/iter",
            "extra": "iterations: 82821124\ncpu: 1.6898502850552959 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.695563942514602,
            "unit": "ns/iter",
            "extra": "iterations: 82690513\ncpu: 1.6920054662135187 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.003979386511379,
            "unit": "ns/iter",
            "extra": "iterations: 15631996\ncpu: 8.954345945329054 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.7054143755142617,
            "unit": "ns/iter",
            "extra": "iterations: 82363600\ncpu: 1.7005764682456814 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3715.0037134252057,
            "unit": "ns/iter",
            "extra": "iterations: 37597\ncpu: 3714.328270872675 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.616593702357012,
            "unit": "ns/iter",
            "extra": "iterations: 86656185\ncpu: 1.6153492102150588 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 75745.93073100642,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 75718.442401298 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6148616315881503,
            "unit": "ns/iter",
            "extra": "iterations: 86735105\ncpu: 1.6147245109116999 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 673.0035177026953,
            "unit": "ns/iter",
            "extra": "iterations: 208302\ncpu: 672.825032884946 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17661.653773885377,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 17635.52565392353 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3204.234396508906,
            "unit": "ns/iter",
            "extra": "iterations: 49523\ncpu: 2823.397209377463 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 49035.78691268235,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 48952.8792134832 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3304d7897fe72f628da5a567166970b103e17b6",
          "message": "fix metrics compiler warnings (#1328)",
          "timestamp": "2022-04-15T12:50:47+05:30",
          "tree_id": "6b8621d7f00361094390222c31b3fde0c93b8d95",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e3304d7897fe72f628da5a567166970b103e17b6"
        },
        "date": 1650007959850,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.10960145225494888,
            "unit": "ms/iter",
            "extra": "iterations: 1271\ncpu: 0.10562840283241545 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.21405613070142399,
            "unit": "ms/iter",
            "extra": "iterations: 643\ncpu: 0.20848615863141526 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.10753360167088107,
            "unit": "ms/iter",
            "extra": "iterations: 1293\ncpu: 0.10522977571539054 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.21449447040499886,
            "unit": "ms/iter",
            "extra": "iterations: 658\ncpu: 0.20797294832826746 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.10772081521841195,
            "unit": "ms/iter",
            "extra": "iterations: 1300\ncpu: 0.10520546153846155 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.21259556771771862,
            "unit": "ms/iter",
            "extra": "iterations: 659\ncpu: 0.2068411229135054 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 6.563107172648112,
            "unit": "ms/iter",
            "extra": "iterations: 21\ncpu: 6.522038095238086 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 26.45125389099121,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 26.38045999999998 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 52.98834519829832,
            "unit": "ns/iter",
            "extra": "iterations: 2645503\ncpu: 52.89530951202854 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 318.40332500342805,
            "unit": "ns/iter",
            "extra": "iterations: 440303\ncpu: 317.521116140476 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1006.6303624578072,
            "unit": "ns/iter",
            "extra": "iterations: 139316\ncpu: 1002.7678084354993 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 230.56938032118867,
            "unit": "ns/iter",
            "extra": "iterations: 607589\ncpu: 230.23606418154372 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 972.9272582722231,
            "unit": "ns/iter",
            "extra": "iterations: 147896\ncpu: 947.4049331963005 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.6929640752900954,
            "unit": "ns/iter",
            "extra": "iterations: 82672446\ncpu: 1.6853608032838414 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.695706239401349,
            "unit": "ns/iter",
            "extra": "iterations: 82773137\ncpu: 1.6915524175433874 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 11.487683228962593,
            "unit": "ns/iter",
            "extra": "iterations: 15625087\ncpu: 8.953870144851038 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.6917895916521515,
            "unit": "ns/iter",
            "extra": "iterations: 82013790\ncpu: 1.690242579936861 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4041.8607431859455,
            "unit": "ns/iter",
            "extra": "iterations: 35969\ncpu: 3892.560260224082 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.6527826338534781,
            "unit": "ns/iter",
            "extra": "iterations: 86617047\ncpu: 1.6158585965185353 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 77226.69424620946,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 76830.49917718045 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.6159041282366884,
            "unit": "ns/iter",
            "extra": "iterations: 86608474\ncpu: 1.6153950478333108 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 710.9424947130818,
            "unit": "ns/iter",
            "extra": "iterations: 196506\ncpu: 710.2806021190192 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17651.623399939668,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 17597.489644784735 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2741.917176714352,
            "unit": "ns/iter",
            "extra": "iterations: 50670\ncpu: 2739.9052693901704 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 52409.6442072579,
            "unit": "ns/iter",
            "extra": "iterations: 2848\ncpu: 49475.77247191007 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "defdfd2ca7b641beb4462aa0d55331938fada38c",
          "message": "Replace deprecated googletest API (#1327)",
          "timestamp": "2022-04-15T09:08:26-07:00",
          "tree_id": "9d9b03dd4cac77dd02442fb5fda4f36091b83d34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/defdfd2ca7b641beb4462aa0d55331938fada38c"
        },
        "date": 1650039809344,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.14917907260713123,
            "unit": "ms/iter",
            "extra": "iterations: 924\ncpu: 0.1465719696969697 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.29197260111319917,
            "unit": "ms/iter",
            "extra": "iterations: 476\ncpu: 0.2863590336134454 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.15421543024518164,
            "unit": "ms/iter",
            "extra": "iterations: 985\ncpu: 0.14425614213197968 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.3066748644398377,
            "unit": "ms/iter",
            "extra": "iterations: 452\ncpu: 0.3009444690265488 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.14456414866085424,
            "unit": "ms/iter",
            "extra": "iterations: 922\ncpu: 0.14214381778741864 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.3090634734682724,
            "unit": "ms/iter",
            "extra": "iterations: 503\ncpu: 0.28801590457256465 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 16.414284706115723,
            "unit": "ms/iter",
            "extra": "iterations: 10\ncpu: 6.694409999999995 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 40.8639113108317,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 24.059499999999975 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 68.56239395974146,
            "unit": "ns/iter",
            "extra": "iterations: 2041819\ncpu: 58.436325648845475 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 442.65865487955244,
            "unit": "ns/iter",
            "extra": "iterations: 397391\ncpu: 365.0226099735525 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 1459.9049437765282,
            "unit": "ns/iter",
            "extra": "iterations: 108464\ncpu: 1191.859050007376 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 310.9257282342942,
            "unit": "ns/iter",
            "extra": "iterations: 531986\ncpu: 255.34694522036295 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 1291.2633579736364,
            "unit": "ns/iter",
            "extra": "iterations: 125070\ncpu: 1066.2093227792434 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 2.7359617248714367,
            "unit": "ns/iter",
            "extra": "iterations: 50874496\ncpu: 2.725408817809223 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 2.3219886701955237,
            "unit": "ns/iter",
            "extra": "iterations: 51822102\ncpu: 2.3178990308034986 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.906156753616003,
            "unit": "ns/iter",
            "extra": "iterations: 13727913\ncpu: 9.88960230152974 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 2.379884099876624,
            "unit": "ns/iter",
            "extra": "iterations: 64115481\ncpu: 2.3617119865325513 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 4174.7547590688855,
            "unit": "ns/iter",
            "extra": "iterations: 33266\ncpu: 4164.269825046594 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 2.5234291151376556,
            "unit": "ns/iter",
            "extra": "iterations: 63326925\ncpu: 2.507506877998576 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 83611.96407820281,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 83585.50808314087 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 2.3426229817645012,
            "unit": "ns/iter",
            "extra": "iterations: 57904838\ncpu: 2.341391577677845 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 693.4751553956158,
            "unit": "ns/iter",
            "extra": "iterations: 203340\ncpu: 693.1454706403073 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 17820.967864541184,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 17754.632136550925 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 3005.2902044697194,
            "unit": "ns/iter",
            "extra": "iterations: 44229\ncpu: 3003.029686404849 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 55817.332133710624,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 55817.30923694778 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e9b7a1867d3700c789fe7f39d2747df9af65a33",
          "message": "Remove redundant tail / in CMake install (#1329)",
          "timestamp": "2022-04-16T12:19:53+05:30",
          "tree_id": "b1cc7ac9bf99bff7bc287880968b9fa0ab462808",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2e9b7a1867d3700c789fe7f39d2747df9af65a33"
        },
        "date": 1650092457636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_SpinLockThrashing/1/process_time/real_time",
            "value": 0.09606854668978987,
            "unit": "ms/iter",
            "extra": "iterations: 1450\ncpu: 0.09364103448275861 ms\nthreads: 1"
          },
          {
            "name": "BM_SpinLockThrashing/2/process_time/real_time",
            "value": 0.19078429152325885,
            "unit": "ms/iter",
            "extra": "iterations: 738\ncpu: 0.186059349593496 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/1/process_time/real_time",
            "value": 0.2355385022085221,
            "unit": "ms/iter",
            "extra": "iterations: 1464\ncpu: 0.10328920765027322 ms\nthreads: 1"
          },
          {
            "name": "BM_ProcYieldSpinLockThrashing/2/process_time/real_time",
            "value": 0.7506604564145922,
            "unit": "ms/iter",
            "extra": "iterations: 271\ncpu: 0.3666339483394836 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/1/process_time/real_time",
            "value": 0.3770752739233981,
            "unit": "ms/iter",
            "extra": "iterations: 461\ncpu: 0.11230477223427332 ms\nthreads: 1"
          },
          {
            "name": "BM_NaiveSpinLockThrashing/2/process_time/real_time",
            "value": 0.5239188170232693,
            "unit": "ms/iter",
            "extra": "iterations: 238\ncpu: 0.3469756302521008 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/1/process_time/real_time",
            "value": 5.965828895568848,
            "unit": "ms/iter",
            "extra": "iterations: 24\ncpu: 5.767499999999999 ms\nthreads: 1"
          },
          {
            "name": "BM_ThreadYieldSpinLockThrashing/2/process_time/real_time",
            "value": 23.24060599009196,
            "unit": "ms/iter",
            "extra": "iterations: 6\ncpu: 23.21366666666665 ms\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 47.007242249482665,
            "unit": "ns/iter",
            "extra": "iterations: 2996191\ncpu: 46.71568000838398 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithScope",
            "value": 279.29742843672943,
            "unit": "ns/iter",
            "extra": "iterations: 501323\ncpu: 279.0219080313491 ns\nthreads: 1"
          },
          {
            "name": "BM_NestedSpanCreationWithScope",
            "value": 884.3784808796274,
            "unit": "ns/iter",
            "extra": "iterations: 158305\ncpu: 883.923438931177 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWithManualSpanContextPropagation",
            "value": 203.86903537342047,
            "unit": "ns/iter",
            "extra": "iterations: 689546\ncpu: 202.85405179639923 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreationWitContextPropagation",
            "value": 838.1049888910552,
            "unit": "ns/iter",
            "extra": "iterations: 167779\ncpu: 834.5818010597276 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdDefaultConstructor",
            "value": 1.4937172805812073,
            "unit": "ns/iter",
            "extra": "iterations: 93602910\ncpu: 1.487335169387362 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdConstructor",
            "value": 1.5201792943316454,
            "unit": "ns/iter",
            "extra": "iterations: 93833151\ncpu: 1.4920643558053381 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdToLowerBase16",
            "value": 9.220214796720025,
            "unit": "ns/iter",
            "extra": "iterations: 17720061\ncpu: 7.907613862051604 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanIdIsValid",
            "value": 1.4986496060626349,
            "unit": "ns/iter",
            "extra": "iterations: 92874533\ncpu: 1.494736991032838 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFromTenEntries",
            "value": 3308.2073566701506,
            "unit": "ns/iter",
            "extra": "iterations: 42839\ncpu: 3285.6369196293103 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageHavingTenEntries",
            "value": 1.4262662593762494,
            "unit": "ns/iter",
            "extra": "iterations: 98303561\ncpu: 1.4240348831310397 ns\nthreads: 1"
          },
          {
            "name": "BM_CreateBaggageFrom180Entries",
            "value": 67149.09342360348,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 66933.28550932568 ns\nthreads: 1"
          },
          {
            "name": "BM_ExtractBaggageWith180Entries",
            "value": 1.4282098074856888,
            "unit": "ns/iter",
            "extra": "iterations: 98076303\ncpu: 1.4263557630225934 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWithTenEntries",
            "value": 591.8629020524621,
            "unit": "ns/iter",
            "extra": "iterations: 235538\ncpu: 591.0523991882411 ns\nthreads: 1"
          },
          {
            "name": "BM_SetValueBaggageWith180Entries",
            "value": 15629.265440437926,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 15586.635586635573 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeaderTenEntries",
            "value": 2383.6759432369586,
            "unit": "ns/iter",
            "extra": "iterations: 58921\ncpu: 2378.9243223977865 ns\nthreads: 1"
          },
          {
            "name": "BM_BaggageToHeader180Entries",
            "value": 41080.6585116437,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 41005.94817432277 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp sdk Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9117067037663351,
            "unit": "ns/iter",
            "extra": "iterations: 72271493\ncpu: 1.9066909272235462 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8227035603326738,
            "unit": "ns/iter",
            "extra": "iterations: 78565616\ncpu: 1.8199297260012577 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 112.56228621339717,
            "unit": "ns/iter",
            "extra": "iterations: 1443818\ncpu: 92.91524277990717 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 438.8554565278875,
            "unit": "ns/iter",
            "extra": "iterations: 387711\ncpu: 370.43700075571775 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 51.876289852983184,
            "unit": "ns/iter",
            "extra": "iterations: 3328475\ncpu: 40.835157241679745 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 53.87171705168634,
            "unit": "ns/iter",
            "extra": "iterations: 3428927\ncpu: 41.210326145759325 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 60.987092738232214,
            "unit": "ns/iter",
            "extra": "iterations: 2978318\ncpu: 45.85611744615579 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 32.56641605784322,
            "unit": "ns/iter",
            "extra": "iterations: 5834987\ncpu: 23.808741990342032 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1165.6672925212822,
            "unit": "ns/iter",
            "extra": "iterations: 156067\ncpu: 895.3000954718168 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1195.5183568188015,
            "unit": "ns/iter",
            "extra": "iterations: 154725\ncpu: 873.373404427208 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 548949.7184753418,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20026.000000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7803626.06048584,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 356358.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12077944.278717041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 670090 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 350474.14826183784,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 19817.142857142862 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 5015068.054199219,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 358349 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7476060.390472412,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 691420.0000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.8738786763042286,
            "unit": "ns/iter",
            "extra": "iterations: 48762308\ncpu: 2.6293320652500696 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.5740599959019885,
            "unit": "ns/iter",
            "extra": "iterations: 18602105\ncpu: 7.566606037327498 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081180520,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9495525575436436,
            "unit": "ns/iter",
            "extra": "iterations: 71664039\ncpu: 1.949361240998432 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9520363720376295,
            "unit": "ns/iter",
            "extra": "iterations: 71844610\ncpu: 1.9498720920052324 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.93446023733772,
            "unit": "ns/iter",
            "extra": "iterations: 1379881\ncpu: 101.52382705465183 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 415.10401042244536,
            "unit": "ns/iter",
            "extra": "iterations: 354323\ncpu: 395.585101729213 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 48.621242460338294,
            "unit": "ns/iter",
            "extra": "iterations: 3138542\ncpu: 44.65130624347227 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 88.78922163992982,
            "unit": "ns/iter",
            "extra": "iterations: 3135695\ncpu: 44.65357759603534 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 61.250796372663146,
            "unit": "ns/iter",
            "extra": "iterations: 2898887\ncpu: 48.28339290217251 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 30.138203077310617,
            "unit": "ns/iter",
            "extra": "iterations: 5698702\ncpu: 24.516302133362995 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1027.1754457650509,
            "unit": "ns/iter",
            "extra": "iterations: 144966\ncpu: 961.5454658333682 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 981.6639092377249,
            "unit": "ns/iter",
            "extra": "iterations: 145532\ncpu: 972.6355715581457 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 520958.66203308105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20034.5 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7512216.567993164,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 70034 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12050595.2835083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 329811 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 397578.52218996646,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 20438.894515989006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 5858781.337738037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 67155.99999999988 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7451670.169830322,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 304702.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.528644502171626,
            "unit": "ns/iter",
            "extra": "iterations: 46661845\ncpu: 2.9992084539306156 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.461957363503585,
            "unit": "ns/iter",
            "extra": "iterations: 15615955\ncpu: 8.973725910455046 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643217084570,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.4801477784085297,
            "unit": "ns/iter",
            "extra": "iterations: 51491980\ncpu: 2.471328544755902 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.54699428047278,
            "unit": "ns/iter",
            "extra": "iterations: 50160873\ncpu: 2.528008234625423 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 98.8380651873106,
            "unit": "ns/iter",
            "extra": "iterations: 1404297\ncpu: 98.36993171672378 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 381.64588309826837,
            "unit": "ns/iter",
            "extra": "iterations: 364348\ncpu: 380.8183385115328 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.65236502607283,
            "unit": "ns/iter",
            "extra": "iterations: 3205356\ncpu: 44.10000012479114 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.7058684382855,
            "unit": "ns/iter",
            "extra": "iterations: 3361554\ncpu: 44.086782482149644 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 47.164607351833915,
            "unit": "ns/iter",
            "extra": "iterations: 2986361\ncpu: 46.85756343590075 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.91560659880561,
            "unit": "ns/iter",
            "extra": "iterations: 6024096\ncpu: 23.87749132815947 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 921.1970567184735,
            "unit": "ns/iter",
            "extra": "iterations: 142542\ncpu: 919.5710737887778 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 953.2004164572869,
            "unit": "ns/iter",
            "extra": "iterations: 147408\ncpu: 935.4146314989689 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8270242.214202881,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 96902 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2721480.308399256,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 204605.5393586006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11638143.062591553,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 488702 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 374176.55309148144,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 24970.03191668067 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3790826.9223526926,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 223659.08346972178 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8300862.3123168945,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 480365.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.076539737265613,
            "unit": "ns/iter",
            "extra": "iterations: 41378862\ncpu: 3.360522577928799 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.340692533361482,
            "unit": "ns/iter",
            "extra": "iterations: 16949153\ncpu: 8.264643076854638 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da",
          "message": "move non-active members to Emeritus (#1186)",
          "timestamp": "2022-01-31T17:54:10Z",
          "tree_id": "0daef00e22b53e70822c388c416989b402414274",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/43ad7b9fea54d6ff5400778e14e0b4b4ac41b7da"
        },
        "date": 1643652451269,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6359144076477121,
            "unit": "ns/iter",
            "extra": "iterations: 86084978\ncpu: 1.6251813411626823 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6270064328434573,
            "unit": "ns/iter",
            "extra": "iterations: 86186730\ncpu: 1.6248533852021074 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.27705272568552,
            "unit": "ns/iter",
            "extra": "iterations: 1652389\ncpu: 84.6884117480811 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.53871770062676,
            "unit": "ns/iter",
            "extra": "iterations: 424313\ncpu: 330.2887255398727 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.17184357599766,
            "unit": "ns/iter",
            "extra": "iterations: 3766955\ncpu: 37.15162511896214 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.38570697316035,
            "unit": "ns/iter",
            "extra": "iterations: 3767816\ncpu: 37.1569896194506 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.32775382624712,
            "unit": "ns/iter",
            "extra": "iterations: 3479367\ncpu: 40.21645316518785 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.422644573819174,
            "unit": "ns/iter",
            "extra": "iterations: 6855386\ncpu: 20.413102923744923 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 801.6797763524033,
            "unit": "ns/iter",
            "extra": "iterations: 175771\ncpu: 800.2059497869382 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 799.7252493341736,
            "unit": "ns/iter",
            "extra": "iterations: 174862\ncpu: 798.7778934245282 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 9839586.76946486,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 33031.17434169474 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9455063.343048096,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 77646.99999999958 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7703664.302825928,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 282834.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3725769.281387329,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 33440.29999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3838767.7669525146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 73014.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4645850.737750426,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 247614.53590192646 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.529437000981499,
            "unit": "ns/iter",
            "extra": "iterations: 55999552\ncpu: 2.50037714587431 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.477778471813116,
            "unit": "ns/iter",
            "extra": "iterations: 18732004\ncpu: 7.476343694993874 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2",
          "message": "Prepare for 1.2.0 release (#1188)",
          "timestamp": "2022-02-01T11:58:47-08:00",
          "tree_id": "0dac4978a6de140a9ef209e3b12c97501a37329d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/033b16fe19f2ec13f4b96a74b3b33a04e1bc83a2"
        },
        "date": 1643746257487,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.516515904598685,
            "unit": "ns/iter",
            "extra": "iterations: 70405182\ncpu: 2.068657389451816 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9850857637844692,
            "unit": "ns/iter",
            "extra": "iterations: 64697401\ncpu: 1.9758598958248725 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 105.28194992778494,
            "unit": "ns/iter",
            "extra": "iterations: 1341947\ncpu: 105.06987235710498 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 406.5154568802614,
            "unit": "ns/iter",
            "extra": "iterations: 342159\ncpu: 402.9167726115637 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 65.22820901677795,
            "unit": "ns/iter",
            "extra": "iterations: 2891929\ncpu: 47.25963189276087 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 65.05397798398317,
            "unit": "ns/iter",
            "extra": "iterations: 2484199\ncpu: 47.00078375363644 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 70.78087085076018,
            "unit": "ns/iter",
            "extra": "iterations: 2863349\ncpu: 49.851240627670634 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 35.70915767257885,
            "unit": "ns/iter",
            "extra": "iterations: 5582004\ncpu: 25.779218359571253 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1417.2884651758807,
            "unit": "ns/iter",
            "extra": "iterations: 142081\ncpu: 998.6169860854018 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1492.07540781234,
            "unit": "ns/iter",
            "extra": "iterations: 134220\ncpu: 1072.4236328416027 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 521171.80824279785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21135 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 19500207.901000977,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 92223.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 13164856.433868408,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 407324 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 488634.07350936026,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 21591.094339622647 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1352503.776550293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 63996 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 2975355.0349274008,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 299895.96602972405 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.9935038832867327,
            "unit": "ns/iter",
            "extra": "iterations: 46595221\ncpu: 2.988463130156631 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.981502902274213,
            "unit": "ns/iter",
            "extra": "iterations: 15714252\ncpu: 8.952516479944446 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hamed0381@gmail.com",
            "name": "Hamed Mansouri",
            "username": "hamedprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a320739a46000dfedba7d7a8ba60119d2a6dc5f7",
          "message": "Update GettingStarted.rst (#1189)",
          "timestamp": "2022-02-02T13:58:45-08:00",
          "tree_id": "9a560ec05ec795317cff1ee6e6f328f6923fdf3d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a320739a46000dfedba7d7a8ba60119d2a6dc5f7"
        },
        "date": 1643839938066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.130245047731095,
            "unit": "ns/iter",
            "extra": "iterations: 38578971\ncpu: 3.1203657557377573 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.4178307984969414,
            "unit": "ns/iter",
            "extra": "iterations: 43230958\ncpu: 2.82174871072716 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 103.3149628313267,
            "unit": "ns/iter",
            "extra": "iterations: 1361166\ncpu: 103.1622153359693 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 399.4536687533431,
            "unit": "ns/iter",
            "extra": "iterations: 351878\ncpu: 398.73592551964015 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.164811415094356,
            "unit": "ns/iter",
            "extra": "iterations: 3208853\ncpu: 43.980045206184265 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 82.3762840248214,
            "unit": "ns/iter",
            "extra": "iterations: 3100713\ncpu: 44.3574429494119 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.66509878914213,
            "unit": "ns/iter",
            "extra": "iterations: 2949853\ncpu: 47.44260137708555 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.217413476366154,
            "unit": "ns/iter",
            "extra": "iterations: 5841121\ncpu: 24.17155884974819 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 956.9030274963177,
            "unit": "ns/iter",
            "extra": "iterations: 143699\ncpu: 955.0149966248897 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1132.7767372131348,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1016.6960000000014 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 1155283.9279174805,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 32685.8 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3523110.3897094727,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 79212.50000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11245126.724243164,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 180422.99999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2985191.942370872,
            "unit": "ns/iter",
            "extra": "iterations: 5909\ncpu: 45568.945676087336 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3106907.844543457,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 101881.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 3925024.3331583757,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 170783.88625592412 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.3969410173900467,
            "unit": "ns/iter",
            "extra": "iterations: 41002812\ncpu: 3.3876359504318874 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.993965271871128,
            "unit": "ns/iter",
            "extra": "iterations: 16528457\ncpu: 8.521587949800763 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dupadhya@redhat.com",
            "name": "Deepika Upadhyay",
            "username": "ideepika"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9127fc49dbe63b6f37ead0e158bdb0b78a6b984",
          "message": "cmake: thrift requires boost headers, include them as Boost_INCLUDE_DIRS (#1100)",
          "timestamp": "2022-02-04T10:43:33-08:00",
          "tree_id": "0e7d81535f83b70283f422d9e187c9f58e5cf975",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e9127fc49dbe63b6f37ead0e158bdb0b78a6b984"
        },
        "date": 1644000901790,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.625465031498291,
            "unit": "ns/iter",
            "extra": "iterations: 85837962\ncpu: 1.6248941231852638 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6353190307622611,
            "unit": "ns/iter",
            "extra": "iterations: 86179302\ncpu: 1.6250270859701323 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.17103754015281,
            "unit": "ns/iter",
            "extra": "iterations: 1652797\ncpu: 84.67912272348026 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 359.4149475776143,
            "unit": "ns/iter",
            "extra": "iterations: 423251\ncpu: 330.3701586056499 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 39.61726986102017,
            "unit": "ns/iter",
            "extra": "iterations: 3768892\ncpu: 37.24659661247921 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.51144899111505,
            "unit": "ns/iter",
            "extra": "iterations: 3767421\ncpu: 37.23717099840973 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.25923811720531,
            "unit": "ns/iter",
            "extra": "iterations: 3481747\ncpu: 40.209354671663355 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.423985536764633,
            "unit": "ns/iter",
            "extra": "iterations: 6858543\ncpu: 20.41200295747944 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 795.4782769025833,
            "unit": "ns/iter",
            "extra": "iterations: 175551\ncpu: 794.953603226413 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 808.5005472123945,
            "unit": "ns/iter",
            "extra": "iterations: 175156\ncpu: 800.8044257690291 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.9867671714452615,
            "unit": "ns/iter",
            "extra": "iterations: 55965078\ncpu: 2.498570626489612 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.879289649599929,
            "unit": "ns/iter",
            "extra": "iterations: 18735338\ncpu: 7.475979349825451 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7408616.64232007,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 28332.921447484554 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9180319.30923462,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 76137.00000000029 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7059586.048126221,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 248643.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3891934.394836426,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 31636.300000000007 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3809795.141220093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 70364.29999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4820804.272667836,
            "unit": "ns/iter",
            "extra": "iterations: 590\ncpu: 241890.33898305095 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1b4a49f9b673cbdce4b992ae8fc712e49c39c50",
          "message": "disable failing test (#1193)",
          "timestamp": "2022-02-04T11:52:45-08:00",
          "tree_id": "ed584794fbdf5a6eb267184582f6fa13e64001f2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1b4a49f9b673cbdce4b992ae8fc712e49c39c50"
        },
        "date": 1644005085943,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9900228029322358,
            "unit": "ns/iter",
            "extra": "iterations: 63436826\ncpu: 1.986418740433199 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.087778949843262,
            "unit": "ns/iter",
            "extra": "iterations: 60774968\ncpu: 2.0822997389319893 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 79.46914569801581,
            "unit": "ns/iter",
            "extra": "iterations: 1754650\ncpu: 79.1311087681304 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 347.8628569010873,
            "unit": "ns/iter",
            "extra": "iterations: 420815\ncpu: 344.3380107648254 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 36.702772221307214,
            "unit": "ns/iter",
            "extra": "iterations: 3595256\ncpu: 36.53350415102567 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 36.851196873930675,
            "unit": "ns/iter",
            "extra": "iterations: 3878954\ncpu: 36.73619228276487 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 38.92596425807225,
            "unit": "ns/iter",
            "extra": "iterations: 3573881\ncpu: 38.821214248599816 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.528213487264907,
            "unit": "ns/iter",
            "extra": "iterations: 7218951\ncpu: 20.477490427625813 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 847.0654916206197,
            "unit": "ns/iter",
            "extra": "iterations: 178287\ncpu: 845.2983111499988 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1001.635183579156,
            "unit": "ns/iter",
            "extra": "iterations: 177727\ncpu: 796.1581526723566 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.8395757387660905,
            "unit": "ns/iter",
            "extra": "iterations: 52537170\ncpu: 2.834745381222476 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.865978209983595,
            "unit": "ns/iter",
            "extra": "iterations: 19899507\ncpu: 6.854350713311643 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 564463.8753465419,
            "unit": "ns/iter",
            "extra": "iterations: 7404\ncpu: 21768.287412209622 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3120694.875717163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 62020.09999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11840434.074401855,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 258744.00000000017 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 453277.5417680796,
            "unit": "ns/iter",
            "extra": "iterations: 7361\ncpu: 21529.30308382013 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3414003.1337738037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 90303.19999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4380549.834324763,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 269226.153846154 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6a28df5c46810728c1eb17ca797391695628e64",
          "message": "Metrics SDK: Filtering metrics attributes (#1191)",
          "timestamp": "2022-02-04T18:46:06-08:00",
          "tree_id": "ddcd8770b365e437fd35a082e33825bf256b751f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b6a28df5c46810728c1eb17ca797391695628e64"
        },
        "date": 1644030044984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 271.2943574855041,
            "unit": "ns/iter",
            "extra": "iterations: 504848\ncpu: 270.96353754001206 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.833132377414446,
            "unit": "ns/iter",
            "extra": "iterations: 50003036\ncpu: 2.831384078358762 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.8918825760525015,
            "unit": "ns/iter",
            "extra": "iterations: 48821484\ncpu: 2.868507643069597 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 107.31084901259976,
            "unit": "ns/iter",
            "extra": "iterations: 1377709\ncpu: 106.96569449716885 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 422.2625367339573,
            "unit": "ns/iter",
            "extra": "iterations: 334531\ncpu: 422.06342610998706 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 48.11647818196079,
            "unit": "ns/iter",
            "extra": "iterations: 2892454\ncpu: 48.088232345268075 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.32689870549836,
            "unit": "ns/iter",
            "extra": "iterations: 2871330\ncpu: 47.40280636499461 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 52.396270789617475,
            "unit": "ns/iter",
            "extra": "iterations: 2843171\ncpu: 50.1154520779791 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 32.89342509033455,
            "unit": "ns/iter",
            "extra": "iterations: 5620323\ncpu: 26.06277254883749 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1027.0822274457014,
            "unit": "ns/iter",
            "extra": "iterations: 117592\ncpu: 1026.1743996190198 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1094.716530630298,
            "unit": "ns/iter",
            "extra": "iterations: 133253\ncpu: 1092.0699721582264 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 204.89671113664602,
            "unit": "ns/iter",
            "extra": "iterations: 726937\ncpu: 204.6349270982217 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.874898247910803,
            "unit": "ns/iter",
            "extra": "iterations: 38898505\ncpu: 3.845178625759525 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.710196666586585,
            "unit": "ns/iter",
            "extra": "iterations: 15496771\ncpu: 9.672421435407415 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 11502797.603607178,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 63187.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7753102.779388428,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 125703 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6988024.711608887,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 424817.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3398835.8974456787,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 50350.20000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3850839.0667430586,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 114784.55149501661 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4918647.741342519,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 370156.103896104 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644041052607,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 205.26817353958708,
            "unit": "ns/iter",
            "extra": "iterations: 683487\ncpu: 204.35385018295887 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6627469319658674,
            "unit": "ns/iter",
            "extra": "iterations: 84395816\ncpu: 1.655948204825699 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6625013769459698,
            "unit": "ns/iter",
            "extra": "iterations: 84524730\ncpu: 1.6559059106133787 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.1441049936839,
            "unit": "ns/iter",
            "extra": "iterations: 1653191\ncpu: 84.70412674639535 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.95546455351916,
            "unit": "ns/iter",
            "extra": "iterations: 422956\ncpu: 330.48945989653777 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.294135277569126,
            "unit": "ns/iter",
            "extra": "iterations: 3767005\ncpu: 37.17098862358823 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.301051291643496,
            "unit": "ns/iter",
            "extra": "iterations: 3766428\ncpu: 37.167337328630715 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.38166371520005,
            "unit": "ns/iter",
            "extra": "iterations: 3478849\ncpu: 40.2357216424168 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.471614178681996,
            "unit": "ns/iter",
            "extra": "iterations: 6852567\ncpu: 20.42371858604228 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 798.9286773164364,
            "unit": "ns/iter",
            "extra": "iterations: 174099\ncpu: 796.4118116703721 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 807.054375328072,
            "unit": "ns/iter",
            "extra": "iterations: 174552\ncpu: 804.4181676520463 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 228.51877558966873,
            "unit": "ns/iter",
            "extra": "iterations: 847053\ncpu: 167.5873882744055 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.372662910872636,
            "unit": "ns/iter",
            "extra": "iterations: 55687925\ncpu: 2.5012729420246855 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.691382583165314,
            "unit": "ns/iter",
            "extra": "iterations: 18713375\ncpu: 7.432715905067901 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 555124.9980926514,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 19552.700000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5202386.856079102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 77053.40000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6168870.92590332,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 355034.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3587420.2251434326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 43065.3 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3782730.3409576416,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83058.79999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4912969.340448794,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 317002.1739130435 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644439716057,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 247.6713440837077,
            "unit": "ns/iter",
            "extra": "iterations: 574868\ncpu: 247.03984218985923 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9374729433129783,
            "unit": "ns/iter",
            "extra": "iterations: 74674234\ncpu: 1.9320720450912159 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9845365481752326,
            "unit": "ns/iter",
            "extra": "iterations: 73083770\ncpu: 1.952521059053193 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 100.23730487407694,
            "unit": "ns/iter",
            "extra": "iterations: 1387691\ncpu: 100.00648559369483 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 396.7458422976379,
            "unit": "ns/iter",
            "extra": "iterations: 353252\ncpu: 396.26895247585287 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.16966622565387,
            "unit": "ns/iter",
            "extra": "iterations: 2970690\ncpu: 45.07525187750991 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 46.26860434629529,
            "unit": "ns/iter",
            "extra": "iterations: 2988809\ncpu: 46.20984479101873 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 49.84166288948918,
            "unit": "ns/iter",
            "extra": "iterations: 2766099\ncpu: 49.69796814936852 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 25.090401229401007,
            "unit": "ns/iter",
            "extra": "iterations: 5742318\ncpu: 24.96606770993877 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 956.7866767650876,
            "unit": "ns/iter",
            "extra": "iterations: 145777\ncpu: 956.5487010982534 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 969.0924955458609,
            "unit": "ns/iter",
            "extra": "iterations: 138429\ncpu: 964.6194077830513 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 234.0549599833093,
            "unit": "ns/iter",
            "extra": "iterations: 698599\ncpu: 205.7077092867296 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.989197853753454,
            "unit": "ns/iter",
            "extra": "iterations: 47959002\ncpu: 2.982265977928398 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.908281815490232,
            "unit": "ns/iter",
            "extra": "iterations: 15926248\ncpu: 8.837875687983761 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 573135.8528137207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 22681.600000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5519599.914550781,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 76501 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 3843520.1387147647,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 309956.75675675675 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 378364.1727168177,
            "unit": "ns/iter",
            "extra": "iterations: 6241\ncpu: 22237.926614324628 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1475775.957107544,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 61536.099999999984 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7166068.553924561,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 322308.00000000006 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04e3a68263a90ac0fef822fc1f87196b9c59c545",
          "message": "Sync and Async Instruments SDK (#1184)",
          "timestamp": "2022-02-09T22:27:55-08:00",
          "tree_id": "790993870b48f156a444c412c9953d597451c9e8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/04e3a68263a90ac0fef822fc1f87196b9c59c545"
        },
        "date": 1644475125908,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.42978584787195,
            "unit": "ns/iter",
            "extra": "iterations: 684038\ncpu: 204.41218177937483 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6316212263975431,
            "unit": "ns/iter",
            "extra": "iterations: 86030492\ncpu: 1.6251191496149993 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6417757226613126,
            "unit": "ns/iter",
            "extra": "iterations: 86186730\ncpu: 1.6255669521282452 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.84352232400097,
            "unit": "ns/iter",
            "extra": "iterations: 1652639\ncpu: 84.75958754452724 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 346.9189420513982,
            "unit": "ns/iter",
            "extra": "iterations: 423920\ncpu: 331.3766748443102 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.703775280467624,
            "unit": "ns/iter",
            "extra": "iterations: 3743366\ncpu: 37.23117109040368 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.59736298415143,
            "unit": "ns/iter",
            "extra": "iterations: 3759833\ncpu: 37.228568396521844 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.61177030086749,
            "unit": "ns/iter",
            "extra": "iterations: 3469752\ncpu: 40.270197985331535 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.630319632150094,
            "unit": "ns/iter",
            "extra": "iterations: 6843790\ncpu: 20.457962620127148 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 832.6760762044165,
            "unit": "ns/iter",
            "extra": "iterations: 175587\ncpu: 797.6057453000506 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1024.6520052066166,
            "unit": "ns/iter",
            "extra": "iterations: 173499\ncpu: 812.0709629450328 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 183.30890827948477,
            "unit": "ns/iter",
            "extra": "iterations: 849149\ncpu: 166.18426212596376 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.503680287023096,
            "unit": "ns/iter",
            "extra": "iterations: 55970671\ncpu: 2.500736501801095 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.521851658276658,
            "unit": "ns/iter",
            "extra": "iterations: 18692138\ncpu: 7.484745725716343 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8119761.943817139,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 50085.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2248693.7046051025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51242.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10742192.268371582,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 338378 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 334205.93099821784,
            "unit": "ns/iter",
            "extra": "iterations: 7540\ncpu: 19084.827586206902 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1255850.076675415,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 49371.1 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8280262.9470825195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 315998.0000000001 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7485102bfaa68f8a5d4d70312c60cb928e70f00c",
          "message": "Change Monday's community meeting time (13:00 PT - 14:00 PT) (#1204)",
          "timestamp": "2022-02-11T09:47:47-08:00",
          "tree_id": "5402daaa08f470822751ac029072af80d68fefaa",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/7485102bfaa68f8a5d4d70312c60cb928e70f00c"
        },
        "date": 1644602496354,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 205.2670053753319,
            "unit": "ns/iter",
            "extra": "iterations: 681816\ncpu: 204.18412005585085 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6274105558045027,
            "unit": "ns/iter",
            "extra": "iterations: 85931218\ncpu: 1.6246400696892256 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6269111423499971,
            "unit": "ns/iter",
            "extra": "iterations: 86193097\ncpu: 1.6247391597960565 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.63894793175457,
            "unit": "ns/iter",
            "extra": "iterations: 1650398\ncpu: 84.8841915707605 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.2450836120128,
            "unit": "ns/iter",
            "extra": "iterations: 423686\ncpu: 330.61323716148274 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.211110523598336,
            "unit": "ns/iter",
            "extra": "iterations: 3761974\ncpu: 37.17029942259039 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 41.80952233605203,
            "unit": "ns/iter",
            "extra": "iterations: 3763886\ncpu: 37.20997394713869 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.24403918381166,
            "unit": "ns/iter",
            "extra": "iterations: 3478909\ncpu: 40.221230276503356 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.47404857192645,
            "unit": "ns/iter",
            "extra": "iterations: 6854547\ncpu: 20.432626692909096 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 808.5633228070968,
            "unit": "ns/iter",
            "extra": "iterations: 173040\ncpu: 806.8307905686542 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 813.6016238570988,
            "unit": "ns/iter",
            "extra": "iterations: 172711\ncpu: 813.1207624297226 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 167.2053881606971,
            "unit": "ns/iter",
            "extra": "iterations: 841609\ncpu: 166.31642484811834 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5180667516272637,
            "unit": "ns/iter",
            "extra": "iterations: 56045060\ncpu: 2.4982719261965287 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.52444991146353,
            "unit": "ns/iter",
            "extra": "iterations: 18747154\ncpu: 7.468082888741406 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 16589915.752410889,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 49916.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8381655.216217041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 94284.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 5308029.651641846,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 352731 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4046501.398086548,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 47719.6 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4119355.2017211914,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 87039.89999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5436952.114105225,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 343661.9999999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4",
          "message": "Benchmark documentation (#1205)",
          "timestamp": "2022-02-11T21:23:30-08:00",
          "tree_id": "ec08c9f6ed7b2efa77f3ed004f3b8b7e0c50c6f7",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4"
        },
        "date": 1644644004542,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 175.85029539785643,
            "unit": "ns/iter",
            "extra": "iterations: 792774\ncpu: 175.12090457053338 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8309369963587387,
            "unit": "ns/iter",
            "extra": "iterations: 84954549\ncpu: 1.6293618367628553 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6279813434828199,
            "unit": "ns/iter",
            "extra": "iterations: 86204242\ncpu: 1.6249977582309694 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.73047034372098,
            "unit": "ns/iter",
            "extra": "iterations: 1652910\ncpu: 84.66631577036863 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.85389706930073,
            "unit": "ns/iter",
            "extra": "iterations: 424291\ncpu: 329.98248843364587 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.384962655203566,
            "unit": "ns/iter",
            "extra": "iterations: 3768516\ncpu: 37.15247593482421 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.2310611956182,
            "unit": "ns/iter",
            "extra": "iterations: 3768648\ncpu: 37.16537071119402 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.36338879527397,
            "unit": "ns/iter",
            "extra": "iterations: 3480873\ncpu: 40.220197634329104 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.429271715320514,
            "unit": "ns/iter",
            "extra": "iterations: 6855788\ncpu: 20.413729246003548 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 815.9365870292348,
            "unit": "ns/iter",
            "extra": "iterations: 171533\ncpu: 814.8263016445811 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 815.5766816469103,
            "unit": "ns/iter",
            "extra": "iterations: 171376\ncpu: 815.0149379142929 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 145.80035022369105,
            "unit": "ns/iter",
            "extra": "iterations: 974747\ncpu: 145.43794441019054 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.6660201103812406,
            "unit": "ns/iter",
            "extra": "iterations: 55998432\ncpu: 2.4980645886656254 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.628434144643238,
            "unit": "ns/iter",
            "extra": "iterations: 18723186\ncpu: 6.635692237421559 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 439155.6957810903,
            "unit": "ns/iter",
            "extra": "iterations: 9051\ncpu: 16796.309800022096 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9861683.84552002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 170528.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10827100.276947021,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 362425.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 265987.30270599056,
            "unit": "ns/iter",
            "extra": "iterations: 9156\ncpu: 15360.615989515069 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2492783.2325052773,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 163755.15527950306 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8110666.275024414,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 349873.0000000005 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644873378604,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.58212665357377,
            "unit": "ns/iter",
            "extra": "iterations: 682890\ncpu: 204.53923765174483 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6814293131031235,
            "unit": "ns/iter",
            "extra": "iterations: 86016220\ncpu: 1.626696685811118 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6523710302785508,
            "unit": "ns/iter",
            "extra": "iterations: 86136354\ncpu: 1.6262831370828628 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.81894670233777,
            "unit": "ns/iter",
            "extra": "iterations: 1642011\ncpu: 84.67421960023414 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.8613899701691,
            "unit": "ns/iter",
            "extra": "iterations: 423095\ncpu: 330.5640577175341 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.934452400434616,
            "unit": "ns/iter",
            "extra": "iterations: 3594167\ncpu: 38.84226859798112 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.939804273718906,
            "unit": "ns/iter",
            "extra": "iterations: 3604596\ncpu: 38.83422719217357 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.27265247043529,
            "unit": "ns/iter",
            "extra": "iterations: 3341249\ncpu: 41.903940711991225 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 25.097569572420593,
            "unit": "ns/iter",
            "extra": "iterations: 6309689\ncpu: 22.163105027838927 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 825.7535601571891,
            "unit": "ns/iter",
            "extra": "iterations: 172407\ncpu: 811.337706705644 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 822.1882068135483,
            "unit": "ns/iter",
            "extra": "iterations: 171801\ncpu: 813.5849034638903 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.53541288758169,
            "unit": "ns/iter",
            "extra": "iterations: 838544\ncpu: 165.47754202522466 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5001786845938407,
            "unit": "ns/iter",
            "extra": "iterations: 55811803\ncpu: 2.4997113961718815 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.981268933736777,
            "unit": "ns/iter",
            "extra": "iterations: 18693436\ncpu: 7.47567220921825 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 570165.9033868861,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 19186.565405263846 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6860911.60774231,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 62501.59999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12148878.574371338,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 380836.00000000023 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 465301.2148246238,
            "unit": "ns/iter",
            "extra": "iterations: 7595\ncpu: 19424.20013166557 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1395286.7984771729,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52434.399999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7750217.914581299,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 354613.0000000003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15c6f33631d8cdf09b85911f35263449294d31a4",
          "message": "Update grpc to v1.43.2 to support VS2022/MSVC 19.30 and bazel 5.0 (#1207)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-02-14T20:24:58-08:00",
          "tree_id": "dff039d78807ee53fdc13748fd26ef7b48546fa8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/15c6f33631d8cdf09b85911f35263449294d31a4"
        },
        "date": 1644899780582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.36883825624804,
            "unit": "ns/iter",
            "extra": "iterations: 684165\ncpu: 204.10529623701885 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4369875099171987,
            "unit": "ns/iter",
            "extra": "iterations: 97589538\ncpu: 1.433105462595796 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4369247177243005,
            "unit": "ns/iter",
            "extra": "iterations: 97704639\ncpu: 1.4328736223056924 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 82.36161500628243,
            "unit": "ns/iter",
            "extra": "iterations: 1872351\ncpu: 74.7219404908588 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 293.37292024112594,
            "unit": "ns/iter",
            "extra": "iterations: 480036\ncpu: 291.6293777966653 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.47403193517049,
            "unit": "ns/iter",
            "extra": "iterations: 4271509\ncpu: 32.782934555446346 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.85736910722298,
            "unit": "ns/iter",
            "extra": "iterations: 4271822\ncpu: 32.76798518290321 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.57613664577301,
            "unit": "ns/iter",
            "extra": "iterations: 3945941\ncpu: 35.47551775355994 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.08438466260349,
            "unit": "ns/iter",
            "extra": "iterations: 7774279\ncpu: 18.008924042988404 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 702.9742995171016,
            "unit": "ns/iter",
            "extra": "iterations: 199526\ncpu: 701.6459007848608 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 734.443919365987,
            "unit": "ns/iter",
            "extra": "iterations: 198059\ncpu: 708.4691935231416 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 147.69524269918887,
            "unit": "ns/iter",
            "extra": "iterations: 950441\ncpu: 147.0108086667137 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.203272199728561,
            "unit": "ns/iter",
            "extra": "iterations: 63467885\ncpu: 2.2025611850780913 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.600791832637828,
            "unit": "ns/iter",
            "extra": "iterations: 21220609\ncpu: 6.594862569684027 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 422531.06745382573,
            "unit": "ns/iter",
            "extra": "iterations: 8894\ncpu: 15682.167753541713 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5084738.731384277,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 48423.99999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10798838.138580322,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 115038.00000000009 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 265128.42802303017,
            "unit": "ns/iter",
            "extra": "iterations: 9033\ncpu: 15314.17026458541 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 965532.0644378662,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 42343.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7995738.983154297,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 109754.00000000025 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef3a623a3bedd3fded167bade625d7fa392d2b88",
          "message": "Add Aggregation Storage (#1213)",
          "timestamp": "2022-02-16T14:58:32-08:00",
          "tree_id": "6f402b660d2b4da4a41caf6a91b28f6e4601ec2e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/ef3a623a3bedd3fded167bade625d7fa392d2b88"
        },
        "date": 1645053074592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15899896.621704102,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10692766.666666668 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.47389051441127,
            "unit": "ns/iter",
            "extra": "iterations: 684105\ncpu: 203.91051081339853 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6342723736875475,
            "unit": "ns/iter",
            "extra": "iterations: 85975546\ncpu: 1.624493318134903 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6302856888321018,
            "unit": "ns/iter",
            "extra": "iterations: 86197343\ncpu: 1.6243853363322351 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.85934066120608,
            "unit": "ns/iter",
            "extra": "iterations: 1654381\ncpu: 84.6375774383289 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.7760594843413,
            "unit": "ns/iter",
            "extra": "iterations: 423584\ncpu: 330.20817594621144 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.257423606962675,
            "unit": "ns/iter",
            "extra": "iterations: 3769277\ncpu: 37.14500154804223 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.406228882781626,
            "unit": "ns/iter",
            "extra": "iterations: 3770059\ncpu: 37.17941814703695 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.401911302152975,
            "unit": "ns/iter",
            "extra": "iterations: 3479826\ncpu: 40.21353366518898 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.435372655910005,
            "unit": "ns/iter",
            "extra": "iterations: 6858408\ncpu: 20.411967325361825 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 802.5454589342921,
            "unit": "ns/iter",
            "extra": "iterations: 175978\ncpu: 795.9869983747967 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 841.0482633048797,
            "unit": "ns/iter",
            "extra": "iterations: 173692\ncpu: 799.9337908481679 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 166.9500736631387,
            "unit": "ns/iter",
            "extra": "iterations: 838062\ncpu: 166.68229796840802 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.504161699716387,
            "unit": "ns/iter",
            "extra": "iterations: 55901167\ncpu: 2.500335994774492 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.4922111005573875,
            "unit": "ns/iter",
            "extra": "iterations: 18702825\ncpu: 7.47873115425076 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 6299863.070445504,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 29577.11202084109 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6976010.799407959,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 199431.0000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7517263.889312744,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 367567.99999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3923492.670059204,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 35213.1 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4126917.3934346153,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 201706.994047619 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5211760.997772217,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 362396.9999999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645086277730,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 24394122.037020598,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 13767700 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 245.59187157729176,
            "unit": "ns/iter",
            "extra": "iterations: 570546\ncpu: 244.9718339976093 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9696887338480709,
            "unit": "ns/iter",
            "extra": "iterations: 71692297\ncpu: 1.950552651423625 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9480227305108586,
            "unit": "ns/iter",
            "extra": "iterations: 71605027\ncpu: 1.9467292429063678 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 105.2914800727818,
            "unit": "ns/iter",
            "extra": "iterations: 1377478\ncpu: 101.42622967481151 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 399.6330462583179,
            "unit": "ns/iter",
            "extra": "iterations: 353937\ncpu: 393.24484300878413 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 48.71638144250219,
            "unit": "ns/iter",
            "extra": "iterations: 2896350\ncpu: 48.56153434495143 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 49.47803800269907,
            "unit": "ns/iter",
            "extra": "iterations: 2831463\ncpu: 49.40269394302517 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.422991078043836,
            "unit": "ns/iter",
            "extra": "iterations: 2891821\ncpu: 48.33234837149325 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.641628264007046,
            "unit": "ns/iter",
            "extra": "iterations: 5720052\ncpu: 24.53047629636935 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 972.3026777945353,
            "unit": "ns/iter",
            "extra": "iterations: 146289\ncpu: 955.6494336552992 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1025.4948035888588,
            "unit": "ns/iter",
            "extra": "iterations: 144710\ncpu: 960.6198604104757 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 266.40919455749844,
            "unit": "ns/iter",
            "extra": "iterations: 702557\ncpu: 201.23491759387494 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.007275304910244,
            "unit": "ns/iter",
            "extra": "iterations: 46579253\ncpu: 2.998880209607484 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.970402927781866,
            "unit": "ns/iter",
            "extra": "iterations: 15608938\ncpu: 8.962826298624547 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 524351.8352508545,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21237.900000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6598459.005355835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 74003.80000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7837431.43081665,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 185706.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3887143.850326538,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 59233.399999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3703466.6538238525,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 100487.79999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4925789.610709551,
            "unit": "ns/iter",
            "extra": "iterations: 772\ncpu: 213685.88082901554 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613",
          "message": "thrift boost deps (#1224)",
          "timestamp": "2022-02-18T16:18:32-08:00",
          "tree_id": "0c67ccc931501df9f7334a59aed794f05be921a2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613"
        },
        "date": 1645230974928,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 25960922.241210938,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 15234266.66666667 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 270.023009346735,
            "unit": "ns/iter",
            "extra": "iterations: 502789\ncpu: 262.94509227528846 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.5038721171384988,
            "unit": "ns/iter",
            "extra": "iterations: 51458480\ncpu: 2.498233527302011 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.658596537567363,
            "unit": "ns/iter",
            "extra": "iterations: 48106163\ncpu: 2.643991789575901 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 102.29253768920898,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 101.86700000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 426.39144886779974,
            "unit": "ns/iter",
            "extra": "iterations: 318577\ncpu: 424.7557105503537 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 47.20455953806939,
            "unit": "ns/iter",
            "extra": "iterations: 2998218\ncpu: 46.63803632691153 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.64422036350472,
            "unit": "ns/iter",
            "extra": "iterations: 3037621\ncpu: 47.12381827752705 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.39367253618592,
            "unit": "ns/iter",
            "extra": "iterations: 2820704\ncpu: 50.09054477180166 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.885752865583736,
            "unit": "ns/iter",
            "extra": "iterations: 5524993\ncpu: 24.816719224802643 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1023.431546325005,
            "unit": "ns/iter",
            "extra": "iterations: 139410\ncpu: 978.8185926404124 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1039.6232811591456,
            "unit": "ns/iter",
            "extra": "iterations: 134412\ncpu: 1033.126506561914 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 208.11353650800208,
            "unit": "ns/iter",
            "extra": "iterations: 736284\ncpu: 187.46298982457856 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.584633625426218,
            "unit": "ns/iter",
            "extra": "iterations: 42964027\ncpu: 3.5782656034547227 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.9803408693651665,
            "unit": "ns/iter",
            "extra": "iterations: 16752223\ncpu: 7.972607575722934 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 597639.3222808838,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 27672.600000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7022590.637207031,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 276760.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11803712.844848633,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 704938 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 814220.4284667969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 28946.70000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3378139.305443033,
            "unit": "ns/iter",
            "extra": "iterations: 581\ncpu: 235146.47160068847 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7457067.966461182,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 570203.0000000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645240045465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16376356.283823648,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10522466.666666668 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 181.56929786227738,
            "unit": "ns/iter",
            "extra": "iterations: 775061\ncpu: 180.1767860852243 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6832165854456194,
            "unit": "ns/iter",
            "extra": "iterations: 84091155\ncpu: 1.661047466882813 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.7095844501955557,
            "unit": "ns/iter",
            "extra": "iterations: 84099237\ncpu: 1.6667107217631478 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 86.41062135473013,
            "unit": "ns/iter",
            "extra": "iterations: 1639227\ncpu: 85.18570033314484 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 306.99068065902094,
            "unit": "ns/iter",
            "extra": "iterations: 420528\ncpu: 300.5833143096298 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 36.072551810771344,
            "unit": "ns/iter",
            "extra": "iterations: 4266082\ncpu: 32.81519201928138 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 49.084646688240795,
            "unit": "ns/iter",
            "extra": "iterations: 4258594\ncpu: 35.85096395664862 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.08025776963889,
            "unit": "ns/iter",
            "extra": "iterations: 3463426\ncpu: 40.41593497305851 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.70494803580929,
            "unit": "ns/iter",
            "extra": "iterations: 6828369\ncpu: 20.122316178285057 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 983.0565954087948,
            "unit": "ns/iter",
            "extra": "iterations: 195256\ncpu: 715.796185520547 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 721.6512465641181,
            "unit": "ns/iter",
            "extra": "iterations: 195305\ncpu: 715.0538900693783 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 224.73534707761058,
            "unit": "ns/iter",
            "extra": "iterations: 894660\ncpu: 151.39091945543558 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.231467716841727,
            "unit": "ns/iter",
            "extra": "iterations: 63257109\ncpu: 2.1992911500271064 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.563593653984001,
            "unit": "ns/iter",
            "extra": "iterations: 21362305\ncpu: 6.5518491567272354 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 16163980.960845947,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 49283.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8725919.723510742,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 430470 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7226893.8817897765,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 1077984.0336134455 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3709250.4501342773,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 38679.79999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4039274.4060281483,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 333231.63481953286 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5637998.580932617,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 867321.0000000003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3508d7c11c8bce76e7de1d252b97a239516be2a7",
          "message": "allow extension of the lifetime of ContextStorage. (#1214)",
          "timestamp": "2022-02-18T23:44:56-08:00",
          "tree_id": "c4a43b76bc54e2209e13167fbc7a4f6a2876d1a5",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3508d7c11c8bce76e7de1d252b97a239516be2a7"
        },
        "date": 1645257408718,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18753210.703531902,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 11446866.66666667 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 277.591911324684,
            "unit": "ns/iter",
            "extra": "iterations: 681471\ncpu: 205.74786014371853 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6298642705400552,
            "unit": "ns/iter",
            "extra": "iterations: 86044239\ncpu: 1.624645666283364 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.628867543883591,
            "unit": "ns/iter",
            "extra": "iterations: 86223355\ncpu: 1.6243209278970874 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.73420555554141,
            "unit": "ns/iter",
            "extra": "iterations: 1652809\ncpu: 84.68734136854289 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 382.82905462655964,
            "unit": "ns/iter",
            "extra": "iterations: 368188\ncpu: 381.84405792692866 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.38550591175907,
            "unit": "ns/iter",
            "extra": "iterations: 3765719\ncpu: 37.15840188819187 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 45.0704169263135,
            "unit": "ns/iter",
            "extra": "iterations: 3768973\ncpu: 37.34181698834137 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.46182662996733,
            "unit": "ns/iter",
            "extra": "iterations: 3471886\ncpu: 40.28775714409975 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.427089480641783,
            "unit": "ns/iter",
            "extra": "iterations: 6859450\ncpu: 20.412482050310157 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 822.1119000988595,
            "unit": "ns/iter",
            "extra": "iterations: 169630\ncpu: 819.6421623533579 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 833.8387845777075,
            "unit": "ns/iter",
            "extra": "iterations: 169798\ncpu: 831.3949516484294 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 239.03860503809926,
            "unit": "ns/iter",
            "extra": "iterations: 832892\ncpu: 167.21099494292176 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5064740908157614,
            "unit": "ns/iter",
            "extra": "iterations: 56021288\ncpu: 2.498309214168728 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.480335529500906,
            "unit": "ns/iter",
            "extra": "iterations: 18749314\ncpu: 7.467670550506543 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7114257.8125,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 61641.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5818848.371505737,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 56131.40000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 14318180.084228516,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 302648.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 398997.67860732577,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 18307.655381505814 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1271984.1003417969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48554.700000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8479852.676391602,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 275656.00000000023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645259734788,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 14827403.155240146,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 9957390.90909091 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 206.6159380298733,
            "unit": "ns/iter",
            "extra": "iterations: 683020\ncpu: 203.9471757781617 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6290065072999944,
            "unit": "ns/iter",
            "extra": "iterations: 86065397\ncpu: 1.624410098288398 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.626299290167249,
            "unit": "ns/iter",
            "extra": "iterations: 86158088\ncpu: 1.6243640411333176 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.96647542530408,
            "unit": "ns/iter",
            "extra": "iterations: 1639463\ncpu: 84.68803504562165 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 341.1848095282652,
            "unit": "ns/iter",
            "extra": "iterations: 422933\ncpu: 330.66655947868816 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.35654054215981,
            "unit": "ns/iter",
            "extra": "iterations: 3764918\ncpu: 37.15839229433418 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.31174297448224,
            "unit": "ns/iter",
            "extra": "iterations: 3768090\ncpu: 37.169759745653586 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.299458829771424,
            "unit": "ns/iter",
            "extra": "iterations: 3481946\ncpu: 40.22922813851797 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.719450186030905,
            "unit": "ns/iter",
            "extra": "iterations: 6854647\ncpu: 20.427645654108794 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 797.3546519998347,
            "unit": "ns/iter",
            "extra": "iterations: 175799\ncpu: 795.8566317214546 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 802.9232984390711,
            "unit": "ns/iter",
            "extra": "iterations: 175157\ncpu: 799.3400206671727 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 230.15055584923874,
            "unit": "ns/iter",
            "extra": "iterations: 835991\ncpu: 168.71748619303318 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.6206986193426003,
            "unit": "ns/iter",
            "extra": "iterations: 55970671\ncpu: 2.4971471219274823 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.94124642317052,
            "unit": "ns/iter",
            "extra": "iterations: 18634640\ncpu: 7.549177231220996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 7311489.582061768,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 61043 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2294895.887374878,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 46157.80000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11483750.343322754,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 271648.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 635879.3938674486,
            "unit": "ns/iter",
            "extra": "iterations: 8827\ncpu: 17276.56055284921 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3302293.062210083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 65751.69999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4256977.240244548,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 244074.49999999994 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645266230840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 13497140.672471788,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 12717011.111111112 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.3459698297161,
            "unit": "ns/iter",
            "extra": "iterations: 685861\ncpu: 203.92470194397995 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6272015805730509,
            "unit": "ns/iter",
            "extra": "iterations: 86014635\ncpu: 1.6246258558209312 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6265298559655486,
            "unit": "ns/iter",
            "extra": "iterations: 86172406\ncpu: 1.6242914234053067 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 119.33813982603664,
            "unit": "ns/iter",
            "extra": "iterations: 1653291\ncpu: 84.83068014039874 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 654.2034141951269,
            "unit": "ns/iter",
            "extra": "iterations: 422760\ncpu: 330.9707635537893 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 40.10005668779277,
            "unit": "ns/iter",
            "extra": "iterations: 3501050\ncpu: 40.024649747932756 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.136752226615044,
            "unit": "ns/iter",
            "extra": "iterations: 3485066\ncpu: 40.2060391395744 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 47.792900403706554,
            "unit": "ns/iter",
            "extra": "iterations: 2940911\ncpu: 47.64268622885898 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.45149579676439,
            "unit": "ns/iter",
            "extra": "iterations: 6857501\ncpu: 20.417889840628558 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 874.1589433108096,
            "unit": "ns/iter",
            "extra": "iterations: 160765\ncpu: 868.0141821913982 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 890.5436711677413,
            "unit": "ns/iter",
            "extra": "iterations: 160777\ncpu: 873.022260646736 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 168.22501134395972,
            "unit": "ns/iter",
            "extra": "iterations: 831848\ncpu: 166.79886229214952 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5060319778228304,
            "unit": "ns/iter",
            "extra": "iterations: 55839183\ncpu: 2.4967199108196123 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.485189513760108,
            "unit": "ns/iter",
            "extra": "iterations: 18750820\ncpu: 7.462361646050681 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 568556.2202953727,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 21478.410041841005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 11049699.783325195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 303120.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12424135.208129883,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 668649.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 310962.5086308811,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 18872.72237196765 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2316928.004838556,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 180594.68791500665 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8269524.574279785,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 426142.99999999994 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645691192240,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16020735.104878744,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10748633.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 222.66816346722675,
            "unit": "ns/iter",
            "extra": "iterations: 661666\ncpu: 221.07362324798316 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.263228788327199,
            "unit": "ns/iter",
            "extra": "iterations: 62224435\ncpu: 2.256965450951865 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.2261113074676113,
            "unit": "ns/iter",
            "extra": "iterations: 65614953\ncpu: 2.2131022482024796 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 82.599334102462,
            "unit": "ns/iter",
            "extra": "iterations: 1725489\ncpu: 82.11898192338525 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 321.50141843458204,
            "unit": "ns/iter",
            "extra": "iterations: 404015\ncpu: 321.11456257812205 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.157761676176996,
            "unit": "ns/iter",
            "extra": "iterations: 3927124\ncpu: 37.03244409904041 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 36.69580643003309,
            "unit": "ns/iter",
            "extra": "iterations: 3942640\ncpu: 36.54180954893167 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.973052353580535,
            "unit": "ns/iter",
            "extra": "iterations: 3682902\ncpu: 43.53881802991227 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.983886722373764,
            "unit": "ns/iter",
            "extra": "iterations: 6535093\ncpu: 21.937882138785163 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 783.5333718618828,
            "unit": "ns/iter",
            "extra": "iterations: 165083\ncpu: 780.6485222585015 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 856.4072410215354,
            "unit": "ns/iter",
            "extra": "iterations: 166849\ncpu: 855.331467374693 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.5678732661452,
            "unit": "ns/iter",
            "extra": "iterations: 804551\ncpu: 165.1839348903923 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0538561551213577,
            "unit": "ns/iter",
            "extra": "iterations: 49316091\ncpu: 2.7591460969605235 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.410029160936924,
            "unit": "ns/iter",
            "extra": "iterations: 19570894\ncpu: 7.543140338913492 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 569088.2205963135,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21635.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7294209.003448486,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 199942 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10323939.323425293,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 415272.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 562852.6202587327,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 22055.838261587127 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3680882.412333821,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 230081.68604651163 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4753896.490632548,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 410495.2681388013 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646109271204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 13008421.117609197,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12595309.090909094 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.17718608359127,
            "unit": "ns/iter",
            "extra": "iterations: 686275\ncpu: 204.00728570908163 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.625976944149084,
            "unit": "ns/iter",
            "extra": "iterations: 85972378\ncpu: 1.624468268168644 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6252566911598794,
            "unit": "ns/iter",
            "extra": "iterations: 86157027\ncpu: 1.6243399392135476 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.71812416937817,
            "unit": "ns/iter",
            "extra": "iterations: 1654240\ncpu: 84.66600976883647 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.3582724349896,
            "unit": "ns/iter",
            "extra": "iterations: 424679\ncpu: 330.02244047857323 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.20235982657704,
            "unit": "ns/iter",
            "extra": "iterations: 3766185\ncpu: 37.15571593004594 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.39668975997584,
            "unit": "ns/iter",
            "extra": "iterations: 3769470\ncpu: 37.17119382831007 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.293546973007764,
            "unit": "ns/iter",
            "extra": "iterations: 3481877\ncpu: 40.21787673717367 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.465363171818243,
            "unit": "ns/iter",
            "extra": "iterations: 6856326\ncpu: 20.416619629813397 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 801.8893776738497,
            "unit": "ns/iter",
            "extra": "iterations: 175698\ncpu: 796.2350169040062 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 804.4216513379771,
            "unit": "ns/iter",
            "extra": "iterations: 173211\ncpu: 800.2522934455652 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 166.7428754385665,
            "unit": "ns/iter",
            "extra": "iterations: 841048\ncpu: 165.76699546280355 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.501346206768564,
            "unit": "ns/iter",
            "extra": "iterations: 55817588\ncpu: 2.4980011676606306 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.544737987723365,
            "unit": "ns/iter",
            "extra": "iterations: 18735137\ncpu: 7.477794264328038 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5429353.713989258,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 58909.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4383895.8740234375,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 56853.200000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6877636.2489865655,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 134773.2797140304 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 307077.7738813564,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 18122.2079589217 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1195591.4497375488,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51976.29999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7879841.327667236,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 135355.99999999983 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fe14b984a07197e5d2676d4678dcef8a9d559db",
          "message": "centos image (#1240)",
          "timestamp": "2022-03-02T02:29:47-08:00",
          "tree_id": "8f2bba36fcff0ec3cd1dd18ed8ab9f7c9f9bf5f9",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1fe14b984a07197e5d2676d4678dcef8a9d559db"
        },
        "date": 1646217777136,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17437761.480158027,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11495390.909090908 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 206.6016187220078,
            "unit": "ns/iter",
            "extra": "iterations: 680547\ncpu: 205.21683292998134 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6420232991826573,
            "unit": "ns/iter",
            "extra": "iterations: 85710263\ncpu: 1.6306821972999896 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6373676680875513,
            "unit": "ns/iter",
            "extra": "iterations: 85780109\ncpu: 1.6320333656838792 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.56053985155073,
            "unit": "ns/iter",
            "extra": "iterations: 1645454\ncpu: 85.04789559598751 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.4940631628524,
            "unit": "ns/iter",
            "extra": "iterations: 424612\ncpu: 329.30746187107286 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.07136799376763,
            "unit": "ns/iter",
            "extra": "iterations: 3753915\ncpu: 37.31355131908955 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.46581566414335,
            "unit": "ns/iter",
            "extra": "iterations: 3760307\ncpu: 37.27679681472815 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.74645139178146,
            "unit": "ns/iter",
            "extra": "iterations: 3470372\ncpu: 40.34705789465799 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.58200519943855,
            "unit": "ns/iter",
            "extra": "iterations: 6828602\ncpu: 20.469753545454857 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 796.919527004306,
            "unit": "ns/iter",
            "extra": "iterations: 175419\ncpu: 796.2142071269358 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 802.9782060520043,
            "unit": "ns/iter",
            "extra": "iterations: 174338\ncpu: 801.8010990145574 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.71235824204362,
            "unit": "ns/iter",
            "extra": "iterations: 847376\ncpu: 164.84040142746554 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.4958556805586567,
            "unit": "ns/iter",
            "extra": "iterations: 55775337\ncpu: 2.539023654845869 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.38521385686907,
            "unit": "ns/iter",
            "extra": "iterations: 18487193\ncpu: 7.55936285189428 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5087158.679962158,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 62287.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3337658.166885376,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 58519.600000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11347751.61743164,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 145081.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2436819.0187992053,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 36346.9663789772 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3915498.733520508,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 86917.60000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4680396.875745346,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 147658.9098532494 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237242663,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18417119.9798584,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 12238350 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 246.87299747088073,
            "unit": "ns/iter",
            "extra": "iterations: 574923\ncpu: 246.86644994199227 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.73131588697221,
            "unit": "ns/iter",
            "extra": "iterations: 55770227\ncpu: 2.7249431851873225 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.574599837253402,
            "unit": "ns/iter",
            "extra": "iterations: 50880043\ncpu: 2.5587792840505266 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 95.98420108500491,
            "unit": "ns/iter",
            "extra": "iterations: 1315542\ncpu: 95.48368657177043 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 406.8379884484106,
            "unit": "ns/iter",
            "extra": "iterations: 354175\ncpu: 405.6500317639587 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.9075737571004,
            "unit": "ns/iter",
            "extra": "iterations: 3296437\ncpu: 42.28216707918278 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 55.78864646088875,
            "unit": "ns/iter",
            "extra": "iterations: 3126996\ncpu: 47.971759477786335 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.05521513693014,
            "unit": "ns/iter",
            "extra": "iterations: 3001451\ncpu: 47.17221770403712 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 26.673292154070946,
            "unit": "ns/iter",
            "extra": "iterations: 5668406\ncpu: 25.713066424670384 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 917.1182073170103,
            "unit": "ns/iter",
            "extra": "iterations: 149184\ncpu: 910.5500589875597 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1058.0897331237793,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1026.5049999999976 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 197.09045862885245,
            "unit": "ns/iter",
            "extra": "iterations: 852577\ncpu: 196.33346900045396 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.9059936559017756,
            "unit": "ns/iter",
            "extra": "iterations: 41780818\ncpu: 3.8762931831540492 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.408719108362936,
            "unit": "ns/iter",
            "extra": "iterations: 17016890\ncpu: 8.36992540940207 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 9681704.044342041,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 95930 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9265100.955963135,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 255519.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11264958.381652832,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 421465 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 1318413.0191802979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 31845.6 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2799234.219959804,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 189730.9065934066 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7772707.939147949,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 398418.9999999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646364024155,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19251736.72762784,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12178563.636363637 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 205.41425295166852,
            "unit": "ns/iter",
            "extra": "iterations: 680408\ncpu: 204.900882999612 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.669360752426499,
            "unit": "ns/iter",
            "extra": "iterations: 84330237\ncpu: 1.6571375223337745 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6574648188090566,
            "unit": "ns/iter",
            "extra": "iterations: 84498201\ncpu: 1.6566482876954978 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.0047792343108,
            "unit": "ns/iter",
            "extra": "iterations: 1651054\ncpu: 84.82793415599974 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.29113997221094,
            "unit": "ns/iter",
            "extra": "iterations: 424933\ncpu: 328.92338321570685 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.2825492308013,
            "unit": "ns/iter",
            "extra": "iterations: 3764716\ncpu: 37.18747974614818 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.122577266671684,
            "unit": "ns/iter",
            "extra": "iterations: 3764989\ncpu: 37.18430518654896 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.27221090156314,
            "unit": "ns/iter",
            "extra": "iterations: 3476801\ncpu: 40.23655653573501 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.464494622294318,
            "unit": "ns/iter",
            "extra": "iterations: 6850186\ncpu: 20.425649756079647 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 796.4676597533527,
            "unit": "ns/iter",
            "extra": "iterations: 175620\ncpu: 795.7299851953079 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 820.8805006323473,
            "unit": "ns/iter",
            "extra": "iterations: 172752\ncpu: 820.1873205520048 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 164.78237656642807,
            "unit": "ns/iter",
            "extra": "iterations: 849308\ncpu: 164.65922845422392 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5148193992311803,
            "unit": "ns/iter",
            "extra": "iterations: 55734037\ncpu: 2.5082572073506895 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.438105207039229,
            "unit": "ns/iter",
            "extra": "iterations: 18851918\ncpu: 7.421748810916746 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 448889.2202994861,
            "unit": "ns/iter",
            "extra": "iterations: 7459\ncpu: 18223.153237699422 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8284671.306610107,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 91776.80000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6733913.421630859,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 412979 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3340918.0641174316,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 44210.799999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3499017.2386169434,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83790.39999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4634240.996741737,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 374630.2949061662 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646435819161,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19679811.265733507,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 12875711.111111112 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 262.7182393003464,
            "unit": "ns/iter",
            "extra": "iterations: 556151\ncpu: 255.58508390706845 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.6191371450880836,
            "unit": "ns/iter",
            "extra": "iterations: 60638349\ncpu: 2.5724661467943335 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.5964686509016106,
            "unit": "ns/iter",
            "extra": "iterations: 51265526\ncpu: 2.593003727300096 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.2260913848877,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 100.53650000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 480.48659457242184,
            "unit": "ns/iter",
            "extra": "iterations: 338672\ncpu: 430.6399702366891 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 49.07988247082581,
            "unit": "ns/iter",
            "extra": "iterations: 2864814\ncpu: 47.38569414977725 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 51.84373031521782,
            "unit": "ns/iter",
            "extra": "iterations: 2944975\ncpu: 51.65378313907586 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 52.63566936929229,
            "unit": "ns/iter",
            "extra": "iterations: 2700992\ncpu: 51.40726073975786 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.94888057404384,
            "unit": "ns/iter",
            "extra": "iterations: 5547652\ncpu: 24.83427222904396 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1023.2400894165039,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1019.0340000000009 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1054.480869525125,
            "unit": "ns/iter",
            "extra": "iterations: 137595\ncpu: 1010.5054689487257 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 188.7762309373206,
            "unit": "ns/iter",
            "extra": "iterations: 758384\ncpu: 188.3988849975738 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.6567673436552792,
            "unit": "ns/iter",
            "extra": "iterations: 38733846\ncpu: 3.6530557796920036 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.579742804020192,
            "unit": "ns/iter",
            "extra": "iterations: 15966388\ncpu: 8.86067030313932 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 521953.1059265137,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 27922.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4872702.598571777,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 94042.3 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6444456.577301025,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 356967 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3669238.0905151367,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52035.30000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3768494.979270984,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 116185.70119156736 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4890749.85186259,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 350589.81481481495 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646628465967,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16603350.639343262,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 11059316.666666668 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 183.9770869494548,
            "unit": "ns/iter",
            "extra": "iterations: 774191\ncpu: 181.23550906688405 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6581656777715823,
            "unit": "ns/iter",
            "extra": "iterations: 84423808\ncpu: 1.6556609244633935 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6680459300777652,
            "unit": "ns/iter",
            "extra": "iterations: 84566085\ncpu: 1.6559191548243006 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.04281425502703,
            "unit": "ns/iter",
            "extra": "iterations: 1654647\ncpu: 84.67002327384634 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 339.0515673670985,
            "unit": "ns/iter",
            "extra": "iterations: 426011\ncpu: 329.11333275431855 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.29692858161799,
            "unit": "ns/iter",
            "extra": "iterations: 3766448\ncpu: 37.184689659859906 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.28962616585217,
            "unit": "ns/iter",
            "extra": "iterations: 3766559\ncpu: 37.16700043726909 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.31225395942435,
            "unit": "ns/iter",
            "extra": "iterations: 3480829\ncpu: 40.229209765834526 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.51975143490528,
            "unit": "ns/iter",
            "extra": "iterations: 6853037\ncpu: 20.422332463694573 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 806.9451079983039,
            "unit": "ns/iter",
            "extra": "iterations: 174617\ncpu: 805.7852328238376 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 811.6983171078988,
            "unit": "ns/iter",
            "extra": "iterations: 173190\ncpu: 808.6280963104097 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.53261055582638,
            "unit": "ns/iter",
            "extra": "iterations: 852064\ncpu: 165.2527274946483 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.4975206883861367,
            "unit": "ns/iter",
            "extra": "iterations: 55947857\ncpu: 2.49685524147958 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.48477690976403,
            "unit": "ns/iter",
            "extra": "iterations: 18725415\ncpu: 7.4746914821380495 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 457240.7330423516,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 17985.316226023846 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3520404.577255249,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 54434.50000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12064611.911773682,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 371480.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 330883.82333517075,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 18213.307291666668 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1238314.151763916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 50061.799999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8279600.143432617,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 395555.9999999997 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32cd04774b8e7610d89c532b8b984d1ea5c1f518",
          "message": "Bump codecov/codecov-action from 1 to 2.1.0 (#1247)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 1 to 2.1.0.\r\n- [Release notes](https://github.com/codecov/codecov-action/releases)\r\n- [Changelog](https://github.com/codecov/codecov-action/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/codecov/codecov-action/compare/v1...v2.1.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: codecov/codecov-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Ehsan Saei <71217171+esigo@users.noreply.github.com>",
          "timestamp": "2022-03-07T17:16:50+01:00",
          "tree_id": "2a039464fe4b158522433cc28d990e1bde7df908",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/32cd04774b8e7610d89c532b8b984d1ea5c1f518"
        },
        "date": 1646670537793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16375255.584716797,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 9561953.333333336 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 153.3984280481505,
            "unit": "ns/iter",
            "extra": "iterations: 895330\ncpu: 153.27007918867903 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.086122552476493,
            "unit": "ns/iter",
            "extra": "iterations: 45051133\ncpu: 3.067581008450998 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.1292693131478644,
            "unit": "ns/iter",
            "extra": "iterations: 45249308\ncpu: 3.096292654906458 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.48118868339883,
            "unit": "ns/iter",
            "extra": "iterations: 1887971\ncpu: 74.29229580327237 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.60550893282846,
            "unit": "ns/iter",
            "extra": "iterations: 425931\ncpu: 328.0796654857242 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 38.20385062530041,
            "unit": "ns/iter",
            "extra": "iterations: 3667619\ncpu: 38.16718694062825 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.325988754702784,
            "unit": "ns/iter",
            "extra": "iterations: 3667427\ncpu: 38.180364598940855 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.34626413994051,
            "unit": "ns/iter",
            "extra": "iterations: 3248938\ncpu: 43.119505512262776 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.754225935550036,
            "unit": "ns/iter",
            "extra": "iterations: 6441520\ncpu: 21.695252052310643 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 809.9682905480884,
            "unit": "ns/iter",
            "extra": "iterations: 171402\ncpu: 809.4578826384763 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 835.6627536575368,
            "unit": "ns/iter",
            "extra": "iterations: 171390\ncpu: 833.0036758270616 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 155.5843646013196,
            "unit": "ns/iter",
            "extra": "iterations: 925131\ncpu: 150.1665169581389 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.3497687775924083,
            "unit": "ns/iter",
            "extra": "iterations: 42383785\ncpu: 3.3474216613735654 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.154858277579425,
            "unit": "ns/iter",
            "extra": "iterations: 15353066\ncpu: 9.122249588453535 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 554994.2130069894,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 17042.634560906514 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2180466.890335083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 42993.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12539513.111114502,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 291153.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 305734.71125228936,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 17010.56166056166 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1027620.792388916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 45685.9 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 1628831.925430918,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 222237.88617886175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cba0a2a657a154d543eb736ed448c85a2bda88f3",
          "message": "Bump actions/checkout from 2 to 3 (#1248)",
          "timestamp": "2022-03-07T17:03:30Z",
          "tree_id": "a174c8f96600184e1dc540b6d9e0cb8f1a72ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cba0a2a657a154d543eb736ed448c85a2bda88f3"
        },
        "date": 1646673989062,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19839024.543762207,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 11870340.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 279.8115868221108,
            "unit": "ns/iter",
            "extra": "iterations: 674660\ncpu: 206.88969258589515 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.688515216770275,
            "unit": "ns/iter",
            "extra": "iterations: 86060636\ncpu: 1.6268599269938 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6258405822473752,
            "unit": "ns/iter",
            "extra": "iterations: 86157027\ncpu: 1.6245500207429402 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.36298876667611,
            "unit": "ns/iter",
            "extra": "iterations: 1646226\ncpu: 85.04287989619894 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.8007857858507,
            "unit": "ns/iter",
            "extra": "iterations: 426695\ncpu: 328.29468355617 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.37425923122124,
            "unit": "ns/iter",
            "extra": "iterations: 3767522\ncpu: 37.166763724272876 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.33681634468377,
            "unit": "ns/iter",
            "extra": "iterations: 3766428\ncpu: 37.163699930013216 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.34705093091898,
            "unit": "ns/iter",
            "extra": "iterations: 3478477\ncpu: 40.2273178750356 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.50650194949727,
            "unit": "ns/iter",
            "extra": "iterations: 6853942\ncpu: 20.423779483398018 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 800.2146841440375,
            "unit": "ns/iter",
            "extra": "iterations: 172850\ncpu: 797.4503905120047 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 806.1704701033476,
            "unit": "ns/iter",
            "extra": "iterations: 174513\ncpu: 802.284070527696 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.71379179320593,
            "unit": "ns/iter",
            "extra": "iterations: 837286\ncpu: 165.1049939924948 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.500800201896262,
            "unit": "ns/iter",
            "extra": "iterations: 55977833\ncpu: 2.4981835220380897 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.495698614312433,
            "unit": "ns/iter",
            "extra": "iterations: 18746828\ncpu: 7.468202087307784 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 478341.088377627,
            "unit": "ns/iter",
            "extra": "iterations: 7443\ncpu: 19156.79161628376 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 12439451.217651367,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 77918.00000000016 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12484347.820281982,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 381653.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 327189.8258166277,
            "unit": "ns/iter",
            "extra": "iterations: 7638\ncpu: 17999.554857292485 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1209202.527999878,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48889.000000000015 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7880735.397338867,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 335613.99999999965 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owentou@tencent.com",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c96a3e32f0b5bf17e58b1300383f9f205f33558f",
          "message": "Reorder the destructor of members in LoggerProvider and TracerProvider (#1245)",
          "timestamp": "2022-03-08T10:17:02-08:00",
          "tree_id": "18800f0b76f00683569a119ae88fdff4bd9c013f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c96a3e32f0b5bf17e58b1300383f9f205f33558f"
        },
        "date": 1646764222515,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 13970300.555229187,
            "unit": "ns/iter",
            "extra": "iterations: 16\ncpu: 9173599.999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 155.5349660376681,
            "unit": "ns/iter",
            "extra": "iterations: 909705\ncpu: 155.24560159612182 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 3.0381228757971432,
            "unit": "ns/iter",
            "extra": "iterations: 47502392\ncpu: 3.036510245631421 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0990990222798684,
            "unit": "ns/iter",
            "extra": "iterations: 45249308\ncpu: 3.0886682289152363 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.05401244468405,
            "unit": "ns/iter",
            "extra": "iterations: 1887739\ncpu: 74.90002590400474 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.0485561272046,
            "unit": "ns/iter",
            "extra": "iterations: 426435\ncpu: 327.7714071312158 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.88839031351648,
            "unit": "ns/iter",
            "extra": "iterations: 3707450\ncpu: 37.76112961739201 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.96704128866242,
            "unit": "ns/iter",
            "extra": "iterations: 3707657\ncpu: 37.78281000642723 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.467729453832305,
            "unit": "ns/iter",
            "extra": "iterations: 3286254\ncpu: 42.32542584961481 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.303320830360448,
            "unit": "ns/iter",
            "extra": "iterations: 6443655\ncpu: 21.712614967747353 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 818.8715036112606,
            "unit": "ns/iter",
            "extra": "iterations: 171037\ncpu: 813.9238878137469 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 823.4073836045796,
            "unit": "ns/iter",
            "extra": "iterations: 169710\ncpu: 821.8054327971234 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 150.0143903636679,
            "unit": "ns/iter",
            "extra": "iterations: 925681\ncpu: 149.92022089683164 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.140082284011546,
            "unit": "ns/iter",
            "extra": "iterations: 44612414\ncpu: 3.136169676897556 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.125348042703093,
            "unit": "ns/iter",
            "extra": "iterations: 15350305\ncpu: 9.116535469490671 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 515390.87295532227,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 16485.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6985337.734222412,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 165915.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12360007.762908936,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 342367 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 301710.5253260874,
            "unit": "ns/iter",
            "extra": "iterations: 8504\ncpu: 15930.950141110066 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2240933.6400332456,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 148205.7273768614 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7555403.709411621,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 324204.0000000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dj@gregor.com",
            "name": "DJ Gregor",
            "username": "deejgregor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd5a6218bde5a728019f377a67f75c7b821f76c7",
          "message": "Add support for span links to Jaeger export. (#1251)",
          "timestamp": "2022-03-09T09:35:09-08:00",
          "tree_id": "a2ab79068f3d318617bcedeed45d64c2082b8f90",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd5a6218bde5a728019f377a67f75c7b821f76c7"
        },
        "date": 1646848037691,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16776013.374328613,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 11391420 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.89192083074064,
            "unit": "ns/iter",
            "extra": "iterations: 683063\ncpu: 204.6777530037493 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6269088899391362,
            "unit": "ns/iter",
            "extra": "iterations: 86029963\ncpu: 1.624995468148696 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6259274386596814,
            "unit": "ns/iter",
            "extra": "iterations: 86120458\ncpu: 1.6242633080283897 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.90833485554242,
            "unit": "ns/iter",
            "extra": "iterations: 1651385\ncpu: 84.7768993905116 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.7223979182044,
            "unit": "ns/iter",
            "extra": "iterations: 426041\ncpu: 328.23225933654265 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.02515656171801,
            "unit": "ns/iter",
            "extra": "iterations: 3799774\ncpu: 36.85290230418965 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.10606859324611,
            "unit": "ns/iter",
            "extra": "iterations: 3798145\ncpu: 36.837245550130355 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.09192966012338,
            "unit": "ns/iter",
            "extra": "iterations: 3481885\ncpu: 40.23007652464109 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.61565462101759,
            "unit": "ns/iter",
            "extra": "iterations: 6850555\ncpu: 20.43431517592373 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 832.122778595407,
            "unit": "ns/iter",
            "extra": "iterations: 170041\ncpu: 828.4231450062049 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 830.7820946824182,
            "unit": "ns/iter",
            "extra": "iterations: 169123\ncpu: 830.0787001176658 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 164.5936113923344,
            "unit": "ns/iter",
            "extra": "iterations: 844162\ncpu: 164.33812467275243 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.502842667294864,
            "unit": "ns/iter",
            "extra": "iterations: 55965302\ncpu: 2.4984605640116087 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.477695356212705,
            "unit": "ns/iter",
            "extra": "iterations: 18729247\ncpu: 7.4731995365323565 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 439216.361880059,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 18346.004084411168 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8389081.954956055,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 69123.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11314492.225646973,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 420143.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 315544.22145211586,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 19517.017297802708 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1492731.0943603516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51895.39999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7731096.7445373535,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 398547.00000000023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wangxiaolin374@gmail.com",
            "name": "wxl374",
            "username": "wxl374"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a7200b3658517c80412e0c7edfd15208873cf47",
          "message": "fix: use CURLOPT_TIMEOUT_MS to config OtlpHttpExporter's timeout instead of CURLOPT_TIMEOUT (#1261)",
          "timestamp": "2022-03-11T19:43:43+01:00",
          "tree_id": "d90ecfa46f3612ac5bb37c7beb11d1c5b4abb99e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/4a7200b3658517c80412e0c7edfd15208873cf47"
        },
        "date": 1647025062568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19765983.92833363,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12211109.090909092 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 205.3158116801363,
            "unit": "ns/iter",
            "extra": "iterations: 681424\ncpu: 204.83957125079246 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6372191558097922,
            "unit": "ns/iter",
            "extra": "iterations: 85970794\ncpu: 1.6256369575928313 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6363133297726213,
            "unit": "ns/iter",
            "extra": "iterations: 86160739\ncpu: 1.627667097887821 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.97573543301809,
            "unit": "ns/iter",
            "extra": "iterations: 1650583\ncpu: 84.79234306908532 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.5908791099186,
            "unit": "ns/iter",
            "extra": "iterations: 426287\ncpu: 328.60537619021926 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.64728236822367,
            "unit": "ns/iter",
            "extra": "iterations: 3764119\ncpu: 37.18171503079471 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.417019206567275,
            "unit": "ns/iter",
            "extra": "iterations: 3767097\ncpu: 37.17132847919765 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.39925531282245,
            "unit": "ns/iter",
            "extra": "iterations: 3481660\ncpu: 40.22101526283439 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.486470744167278,
            "unit": "ns/iter",
            "extra": "iterations: 6848645\ncpu: 20.427266999530573 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 814.4743519685177,
            "unit": "ns/iter",
            "extra": "iterations: 173924\ncpu: 803.2537200156391 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 829.9592657288028,
            "unit": "ns/iter",
            "extra": "iterations: 172606\ncpu: 814.5777087702642 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 164.7683151877227,
            "unit": "ns/iter",
            "extra": "iterations: 842105\ncpu: 164.76745773983055 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.502367845120728,
            "unit": "ns/iter",
            "extra": "iterations: 55981638\ncpu: 2.498972966814583 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.482193449951756,
            "unit": "ns/iter",
            "extra": "iterations: 18714801\ncpu: 7.4768948919093505 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 457212.80779021076,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 18521.983243716393 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3229298.1147766113,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 57623.100000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11553676.128387451,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 140100.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 386929.9936445267,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 18921.863405249416 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1152789.59274292,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51086.40000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7479729.652404785,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 143498.00000000023 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647039152820,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19579543.007744685,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 13251122.222222224 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 282.3469959809337,
            "unit": "ns/iter",
            "extra": "iterations: 523476\ncpu: 281.69658207826154 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.4298673122304617,
            "unit": "ns/iter",
            "extra": "iterations: 54513313\ncpu: 2.425139708533217 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.8389680646419673,
            "unit": "ns/iter",
            "extra": "iterations: 47972642\ncpu: 2.8353097584243954 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.7754077911377,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 101.7693 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 420.65076452237207,
            "unit": "ns/iter",
            "extra": "iterations: 332649\ncpu: 419.4409121927317 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.853874884896506,
            "unit": "ns/iter",
            "extra": "iterations: 3017495\ncpu: 45.44915567382879 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.81316978103875,
            "unit": "ns/iter",
            "extra": "iterations: 3077606\ncpu: 44.653084247951135 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 54.24422539305257,
            "unit": "ns/iter",
            "extra": "iterations: 2884350\ncpu: 53.96591953126351 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 25.2291258859435,
            "unit": "ns/iter",
            "extra": "iterations: 5486624\ncpu: 25.222905743130905 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1006.3878687066223,
            "unit": "ns/iter",
            "extra": "iterations: 134353\ncpu: 989.2469836922137 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 995.8646482654129,
            "unit": "ns/iter",
            "extra": "iterations: 140168\ncpu: 988.0935734261758 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 239.86707119131265,
            "unit": "ns/iter",
            "extra": "iterations: 740690\ncpu: 198.59684888414856 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.7740418706971783,
            "unit": "ns/iter",
            "extra": "iterations: 36274599\ncpu: 3.7705475393401318 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.408683370228129,
            "unit": "ns/iter",
            "extra": "iterations: 14803051\ncpu: 9.401055228412037 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 622349.2622375488,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 28304 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3335452.5566101074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 91711.2 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 9838957.786560059,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 432059.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2305895.046146922,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 52801.401179941 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3603078.620998483,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 123162.91118421052 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4848270.391931339,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 350843.112244898 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da94697c017aaff539c4ec39c06abf09ae67bae6",
          "message": "AttributesProcessor dtor (#1263)",
          "timestamp": "2022-03-13T09:39:41-07:00",
          "tree_id": "dd37e98794badc023784ece3a4dbb8ec3dbb39d8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da94697c017aaff539c4ec39c06abf09ae67bae6"
        },
        "date": 1647190484221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17753582.73432805,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 11661038.461538462 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 280.92520628437694,
            "unit": "ns/iter",
            "extra": "iterations: 535629\ncpu: 256.86025215214266 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.8515779854880123,
            "unit": "ns/iter",
            "extra": "iterations: 51580196\ncpu: 2.8436398341720146 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.789152158325304,
            "unit": "ns/iter",
            "extra": "iterations: 50452996\ncpu: 2.7850576009400907 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 96.30226987992503,
            "unit": "ns/iter",
            "extra": "iterations: 1451264\ncpu: 96.12682461633449 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 408.38869650927774,
            "unit": "ns/iter",
            "extra": "iterations: 344567\ncpu: 407.32339428906414 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 45.07109726902881,
            "unit": "ns/iter",
            "extra": "iterations: 3120007\ncpu: 43.93002964416427 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.09156724456165,
            "unit": "ns/iter",
            "extra": "iterations: 3222354\ncpu: 44.00720715352817 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 47.71641761669237,
            "unit": "ns/iter",
            "extra": "iterations: 2958561\ncpu: 47.62724175705692 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.131069675545664,
            "unit": "ns/iter",
            "extra": "iterations: 5839781\ncpu: 24.08756424256321 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1004.8937797546387,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1003.643000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1001.1825114371446,
            "unit": "ns/iter",
            "extra": "iterations: 139910\ncpu: 999.5182617396894 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 185.4155073557496,
            "unit": "ns/iter",
            "extra": "iterations: 767245\ncpu: 184.99618765844028 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.4578745425685002,
            "unit": "ns/iter",
            "extra": "iterations: 39689515\ncpu: 3.454277534003628 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.565691673406256,
            "unit": "ns/iter",
            "extra": "iterations: 16313556\ncpu: 8.54933774095605 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 615970.8499908447,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 23836.4 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9108052.253723145,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 193921.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12297513.484954834,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 415578.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 381938.69158346107,
            "unit": "ns/iter",
            "extra": "iterations: 6451\ncpu: 22300.8525809952 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2506582.05446138,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 180995.50706033377 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7480301.856994629,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 408522.00000000006 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49648bd8f741a28a2b111c8d8ecad75a070ea649",
          "message": "Remove nostd::span as dependency from Dependency document (#1260)",
          "timestamp": "2022-03-13T13:19:09-07:00",
          "tree_id": "d98354c87d76ae368a9bc8c2089235ace5df9bf2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/49648bd8f741a28a2b111c8d8ecad75a070ea649"
        },
        "date": 1647203448944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16836722.69185384,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10942349.999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 178.1913253609356,
            "unit": "ns/iter",
            "extra": "iterations: 782910\ncpu: 178.17973968910863 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6271500593240276,
            "unit": "ns/iter",
            "extra": "iterations: 86089742\ncpu: 1.6249334328357032 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.629209271833481,
            "unit": "ns/iter",
            "extra": "iterations: 86149075\ncpu: 1.625124819970499 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.17127365973118,
            "unit": "ns/iter",
            "extra": "iterations: 1645044\ncpu: 85.00429167852046 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.63909472750663,
            "unit": "ns/iter",
            "extra": "iterations: 426161\ncpu: 328.78278397131595 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.512873176221746,
            "unit": "ns/iter",
            "extra": "iterations: 3760166\ncpu: 37.26085497289215 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.46875701042028,
            "unit": "ns/iter",
            "extra": "iterations: 3756493\ncpu: 37.24391340540231 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.34409093149974,
            "unit": "ns/iter",
            "extra": "iterations: 3472403\ncpu: 40.25975671602631 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.709672070604817,
            "unit": "ns/iter",
            "extra": "iterations: 6845899\ncpu: 20.454961430193443 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 848.5699290506178,
            "unit": "ns/iter",
            "extra": "iterations: 165525\ncpu: 846.6968735840504 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 840.5721739928607,
            "unit": "ns/iter",
            "extra": "iterations: 169489\ncpu: 834.1774392438442 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 145.96979030698816,
            "unit": "ns/iter",
            "extra": "iterations: 956258\ncpu: 145.85676668848782 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.4997815712984868,
            "unit": "ns/iter",
            "extra": "iterations: 55980519\ncpu: 2.496818580763783 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.6905715178755765,
            "unit": "ns/iter",
            "extra": "iterations: 18723086\ncpu: 7.481955698969709 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 471747.76678153063,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 16789.2500300951 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 16194756.031036377,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 343377 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12548186.779022217,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 615148.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 335067.1281113361,
            "unit": "ns/iter",
            "extra": "iterations: 8337\ncpu: 17811.790812042702 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2672816.622719019,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 191792.82639885225 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8359777.927398682,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 496406.00000000035 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b1a74c7abd3375ef459b28f6b3536a42cf9e71a",
          "message": "Enable line-length lint for markdown docs (#1268)",
          "timestamp": "2022-03-16T07:17:12-07:00",
          "tree_id": "c63c50aa237422d2259c610614e4461ba2d6f3ef",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0b1a74c7abd3375ef459b28f6b3536a42cf9e71a"
        },
        "date": 1647441247228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19559556.78766424,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11071872.72727273 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 203.9854768043897,
            "unit": "ns/iter",
            "extra": "iterations: 689489\ncpu: 203.09156491256567 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6552456818771344,
            "unit": "ns/iter",
            "extra": "iterations: 84384625\ncpu: 1.6547824914787501 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.66219993290536,
            "unit": "ns/iter",
            "extra": "iterations: 84582946\ncpu: 1.6562830526144123 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.06889528087662,
            "unit": "ns/iter",
            "extra": "iterations: 1654661\ncpu: 84.73566488845756 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.27448400395,
            "unit": "ns/iter",
            "extra": "iterations: 425087\ncpu: 328.54286299039967 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.941037077162406,
            "unit": "ns/iter",
            "extra": "iterations: 3767451\ncpu: 37.194803595322135 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.236767424392156,
            "unit": "ns/iter",
            "extra": "iterations: 3767411\ncpu: 37.14964998509584 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.293547493064075,
            "unit": "ns/iter",
            "extra": "iterations: 3482587\ncpu: 40.209160603884435 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.445547556780674,
            "unit": "ns/iter",
            "extra": "iterations: 6860324\ncpu: 20.415449765929434 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 803.4787765920979,
            "unit": "ns/iter",
            "extra": "iterations: 175200\ncpu: 802.9252283105021 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 802.3513634430421,
            "unit": "ns/iter",
            "extra": "iterations: 173140\ncpu: 801.8742058449799 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 166.1456600794696,
            "unit": "ns/iter",
            "extra": "iterations: 842055\ncpu: 165.9504426670467 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.506111307133103,
            "unit": "ns/iter",
            "extra": "iterations: 55921039\ncpu: 2.498274397226418 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.521418974640915,
            "unit": "ns/iter",
            "extra": "iterations: 18723010\ncpu: 7.475080128675893 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5095802.077842302,
            "unit": "ns/iter",
            "extra": "iterations: 7728\ncpu: 24581.97463768116 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8972699.642181396,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 88165.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7637448.310852051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 244398.00000000012 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3428322.5536346436,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 31054.69999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3747986.078262329,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 70158.80000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4520471.472489206,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 240191.05263157896 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647566998271,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 20276741.548018023,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 13093600 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 246.47528223351208,
            "unit": "ns/iter",
            "extra": "iterations: 572202\ncpu: 244.0994613790235 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9607507069915422,
            "unit": "ns/iter",
            "extra": "iterations: 71584157\ncpu: 1.9538331645087335 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9776037647070495,
            "unit": "ns/iter",
            "extra": "iterations: 71691930\ncpu: 1.9528348588188378 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.97610158918606,
            "unit": "ns/iter",
            "extra": "iterations: 1377709\ncpu: 101.6602199738842 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 394.99327488659975,
            "unit": "ns/iter",
            "extra": "iterations: 355697\ncpu: 393.7547969198503 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.75791461708096,
            "unit": "ns/iter",
            "extra": "iterations: 3130471\ncpu: 44.697778704865826 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 46.593667123423366,
            "unit": "ns/iter",
            "extra": "iterations: 3134080\ncpu: 44.7141106800082 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 51.82319962199274,
            "unit": "ns/iter",
            "extra": "iterations: 2889982\ncpu: 48.49839895196579 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 28.84415609362877,
            "unit": "ns/iter",
            "extra": "iterations: 5687150\ncpu: 24.632285063696255 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 965.3955065452234,
            "unit": "ns/iter",
            "extra": "iterations: 144969\ncpu: 963.836406404128 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 967.8279070015406,
            "unit": "ns/iter",
            "extra": "iterations: 144413\ncpu: 966.5978824621046 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 199.57816546417854,
            "unit": "ns/iter",
            "extra": "iterations: 706728\ncpu: 198.3794331058059 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0121145789290895,
            "unit": "ns/iter",
            "extra": "iterations: 46552148\ncpu: 3.007635651957457 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.029876434611623,
            "unit": "ns/iter",
            "extra": "iterations: 15552497\ncpu: 9.012797109043005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 564169.8837280273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 22151.300000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8059739.351272583,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 105075.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6998918.056488037,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 450315 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4083825.8266448975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52598.20000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4225987.672805786,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 99320.89999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5423491.00112915,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 453396.00000000035 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e072daa229f72431b1c50986645d51180a586d09",
          "message": "install sdk config (#1273)",
          "timestamp": "2022-03-21T07:02:15-07:00",
          "tree_id": "24a560af6e4e7707f903df3142496e8ce3d3f8b1",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e072daa229f72431b1c50986645d51180a586d09"
        },
        "date": 1647872331033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 24695052.04094781,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 14781999.999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 263.8811785706878,
            "unit": "ns/iter",
            "extra": "iterations: 527679\ncpu: 263.2954883556102 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.7461197741964254,
            "unit": "ns/iter",
            "extra": "iterations: 47683112\ncpu: 2.7367970446224232 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.709946138591266,
            "unit": "ns/iter",
            "extra": "iterations: 53357115\ncpu: 2.704182937926835 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 104.47576562583532,
            "unit": "ns/iter",
            "extra": "iterations: 1336273\ncpu: 104.28774659070415 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 416.9578937130838,
            "unit": "ns/iter",
            "extra": "iterations: 274344\ncpu: 411.67548770886185 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 46.728683765129496,
            "unit": "ns/iter",
            "extra": "iterations: 2996434\ncpu: 46.25688401613387 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 47.0028002585042,
            "unit": "ns/iter",
            "extra": "iterations: 2966491\ncpu: 46.80580524262504 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 50.55683508183049,
            "unit": "ns/iter",
            "extra": "iterations: 2821056\ncpu: 50.38843610335982 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 27.377784146077243,
            "unit": "ns/iter",
            "extra": "iterations: 5148081\ncpu: 27.283001180439822 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1042.640542079867,
            "unit": "ns/iter",
            "extra": "iterations: 129422\ncpu: 1037.677520050685 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1344.3608297020112,
            "unit": "ns/iter",
            "extra": "iterations: 135470\ncpu: 1089.092049900347 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 196.4926897585224,
            "unit": "ns/iter",
            "extra": "iterations: 732329\ncpu: 194.63533466515736 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.8114411884508836,
            "unit": "ns/iter",
            "extra": "iterations: 36570903\ncpu: 3.811237584152626 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.936809391961152,
            "unit": "ns/iter",
            "extra": "iterations: 14972750\ncpu: 8.934303985573795 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 901808.500289917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 26900.300000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8315427.303314209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 237276.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11683938.50326538,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 438334.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3407015.636231188,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 52163.787069441896 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3855908.7790299132,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 248937.38977072315 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5359246.730804443,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 441743 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647971686759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 14348225.160078568,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 13627336.363636367 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 203.23987043477615,
            "unit": "ns/iter",
            "extra": "iterations: 690260\ncpu: 202.327239011387 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.925655915636617,
            "unit": "ns/iter",
            "extra": "iterations: 86005123\ncpu: 1.635985102887418 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6320056256705258,
            "unit": "ns/iter",
            "extra": "iterations: 85911180\ncpu: 1.6281245351303522 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.97326183331108,
            "unit": "ns/iter",
            "extra": "iterations: 1650704\ncpu: 84.80557386424218 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 331.42422966428614,
            "unit": "ns/iter",
            "extra": "iterations: 424913\ncpu: 329.3704828988523 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.32010211970697,
            "unit": "ns/iter",
            "extra": "iterations: 3755274\ncpu: 37.24375371810417 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.394790585177255,
            "unit": "ns/iter",
            "extra": "iterations: 3759065\ncpu: 37.24559165643583 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.37936546950179,
            "unit": "ns/iter",
            "extra": "iterations: 3476266\ncpu: 40.29714642090107 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.51767799793044,
            "unit": "ns/iter",
            "extra": "iterations: 6838542\ncpu: 20.471000982373145 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 803.2225086157653,
            "unit": "ns/iter",
            "extra": "iterations: 173637\ncpu: 799.9913612882052 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 825.8176035584054,
            "unit": "ns/iter",
            "extra": "iterations: 173739\ncpu: 806.3612660369865 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.54772738171846,
            "unit": "ns/iter",
            "extra": "iterations: 842445\ncpu: 165.08543584447654 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.506970572590573,
            "unit": "ns/iter",
            "extra": "iterations: 55912999\ncpu: 2.4990127966485938 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.521383910076204,
            "unit": "ns/iter",
            "extra": "iterations: 18720181\ncpu: 7.483207560867065 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 473860.7662202993,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 18850.33838657282 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 11369524.002075195,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 280667 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12034194.469451904,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 548436.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 678853.2733917236,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21338.299999999977 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2707954.6869283095,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 196713.6118598383 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8157925.605773926,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 525383.0000000003 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648048981025,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 22760486.602783203,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12589180.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 254.55513831470392,
            "unit": "ns/iter",
            "extra": "iterations: 552661\ncpu: 254.3524873294841 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.8220185543545173,
            "unit": "ns/iter",
            "extra": "iterations: 50209085\ncpu: 2.8216586699399127 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.7749473230187363,
            "unit": "ns/iter",
            "extra": "iterations: 55458503\ncpu: 2.770897007443566 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 99.75612713539806,
            "unit": "ns/iter",
            "extra": "iterations: 1416975\ncpu: 98.95403941495087 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 418.11401675540134,
            "unit": "ns/iter",
            "extra": "iterations: 326996\ncpu: 411.85824903056925 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.89673025663248,
            "unit": "ns/iter",
            "extra": "iterations: 3108748\ncpu: 44.67097365241569 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.79670631842216,
            "unit": "ns/iter",
            "extra": "iterations: 3121927\ncpu: 44.353215177677114 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 49.36316370110321,
            "unit": "ns/iter",
            "extra": "iterations: 2916108\ncpu: 47.30277479434916 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.106595460264398,
            "unit": "ns/iter",
            "extra": "iterations: 5823991\ncpu: 23.952234816296915 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1024.2023428372522,
            "unit": "ns/iter",
            "extra": "iterations: 144813\ncpu: 1005.93247843771 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 987.0148631618058,
            "unit": "ns/iter",
            "extra": "iterations: 144100\ncpu: 972.9764052741135 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 192.65869892059283,
            "unit": "ns/iter",
            "extra": "iterations: 768631\ncpu: 191.30545086003562 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.5457971129236614,
            "unit": "ns/iter",
            "extra": "iterations: 38472108\ncpu: 3.53190940304077 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.931442475683795,
            "unit": "ns/iter",
            "extra": "iterations: 16211153\ncpu: 8.896436915992341 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 544732.5706481934,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 24714.400000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4150604.248046875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83459 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11027243.13735962,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 169370.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 362885.96369467676,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 23628.72163807416 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1769984.483718872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 73995.19999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8969154.357910156,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 172758.0000000001 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139275476,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 20910342.534383137,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 13956777.777777778 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 202.82414266503676,
            "unit": "ns/iter",
            "extra": "iterations: 689479\ncpu: 202.24676893712498 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6327480373148218,
            "unit": "ns/iter",
            "extra": "iterations: 86069101\ncpu: 1.6247712404943093 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6345625754820867,
            "unit": "ns/iter",
            "extra": "iterations: 86202119\ncpu: 1.6248718897501808 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.98147230770672,
            "unit": "ns/iter",
            "extra": "iterations: 1648174\ncpu: 84.8386153403706 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 332.8058049090455,
            "unit": "ns/iter",
            "extra": "iterations: 425804\ncpu: 328.9818789865761 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.521033286157525,
            "unit": "ns/iter",
            "extra": "iterations: 3768384\ncpu: 37.16574531682547 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.08726464552238,
            "unit": "ns/iter",
            "extra": "iterations: 3753331\ncpu: 37.20788281129479 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.314065744786355,
            "unit": "ns/iter",
            "extra": "iterations: 3481193\ncpu: 40.20963503028987 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.476083061646463,
            "unit": "ns/iter",
            "extra": "iterations: 6854681\ncpu: 20.41963732520886 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 806.660277465045,
            "unit": "ns/iter",
            "extra": "iterations: 175555\ncpu: 796.8995471504667 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 803.6364878285082,
            "unit": "ns/iter",
            "extra": "iterations: 174391\ncpu: 801.3882597152377 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.81108394949254,
            "unit": "ns/iter",
            "extra": "iterations: 841974\ncpu: 165.02017877036582 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5134349530601954,
            "unit": "ns/iter",
            "extra": "iterations: 55936903\ncpu: 2.4985187327943414 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.487583615171551,
            "unit": "ns/iter",
            "extra": "iterations: 18762656\ncpu: 7.474613402281637 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 441834.9516074418,
            "unit": "ns/iter",
            "extra": "iterations: 7438\ncpu: 18528.273729497178 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5268526.077270508,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 61861 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7334294.319152832,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 401539.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 725965.9525672699,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 22308.099903408307 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4133781.1946868896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 90687.80000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5111012.4588012695,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 362144.99999999924 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648158638274,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18665465.441617098,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 13679254.545454545 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 263.1337259605792,
            "unit": "ns/iter",
            "extra": "iterations: 427974\ncpu: 262.64773093692605 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.6815758253940096,
            "unit": "ns/iter",
            "extra": "iterations: 52279186\ncpu: 2.659570866309969 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.7409374732893617,
            "unit": "ns/iter",
            "extra": "iterations: 50605824\ncpu: 2.7359242288002266 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 97.7758881068662,
            "unit": "ns/iter",
            "extra": "iterations: 1437348\ncpu: 97.38309720401742 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 398.1657456136895,
            "unit": "ns/iter",
            "extra": "iterations: 349545\ncpu: 392.95312477649514 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 43.222353418768456,
            "unit": "ns/iter",
            "extra": "iterations: 3349378\ncpu: 43.11185539524054 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 43.001615128491046,
            "unit": "ns/iter",
            "extra": "iterations: 3254807\ncpu: 42.64759784527928 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 47.437620465129,
            "unit": "ns/iter",
            "extra": "iterations: 3040306\ncpu: 47.32928198674737 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.967657810780604,
            "unit": "ns/iter",
            "extra": "iterations: 5830078\ncpu: 23.918101953352924 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 953.9217517236617,
            "unit": "ns/iter",
            "extra": "iterations: 146461\ncpu: 945.5684448419718 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1129.5771598815918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 1127.518999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 212.2559514421681,
            "unit": "ns/iter",
            "extra": "iterations: 772559\ncpu: 180.9029472182707 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.542292586039887,
            "unit": "ns/iter",
            "extra": "iterations: 40992127\ncpu: 3.3976524321365416 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.456994514681458,
            "unit": "ns/iter",
            "extra": "iterations: 16394268\ncpu: 8.582310597826021 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 649296.760559082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 23212.9 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5976984.50088501,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 75436.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11072039.604187012,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 162974.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 491214.76508475636,
            "unit": "ns/iter",
            "extra": "iterations: 5920\ncpu: 24919.932432432433 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1481109.380722046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 74067.60000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7785782.814025879,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 169840 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c9ce393e0582a4e0559a73bd9a572cf324b7086",
          "message": "[Metrics SDK] - fix spelling (AggregationTemporarily to AggregationTemporality) (#1288)",
          "timestamp": "2022-03-24T16:47:49-07:00",
          "tree_id": "f4ae6ba4c2894ee8851934ef8f8120e7564a31fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2c9ce393e0582a4e0559a73bd9a572cf324b7086"
        },
        "date": 1648166395015,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17597583.62403283,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 10990207.692307694 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 235.55312958662796,
            "unit": "ns/iter",
            "extra": "iterations: 770641\ncpu: 181.70574885063215 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4364650806542605,
            "unit": "ns/iter",
            "extra": "iterations: 97180381\ncpu: 1.4342514257070056 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4360437367958228,
            "unit": "ns/iter",
            "extra": "iterations: 97672601\ncpu: 1.4338125386872824 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.8935185429286,
            "unit": "ns/iter",
            "extra": "iterations: 1870675\ncpu: 74.82224330789687 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 290.31631752084024,
            "unit": "ns/iter",
            "extra": "iterations: 483556\ncpu: 290.03155787540624 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.051757904720475,
            "unit": "ns/iter",
            "extra": "iterations: 4268865\ncpu: 32.797031529458074 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.84046063539277,
            "unit": "ns/iter",
            "extra": "iterations: 4268032\ncpu: 32.7814318168186 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 37.84941116322186,
            "unit": "ns/iter",
            "extra": "iterations: 3942396\ncpu: 35.52250966163727 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.16758401642535,
            "unit": "ns/iter",
            "extra": "iterations: 7743705\ncpu: 18.07961434481298 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 759.5510916872415,
            "unit": "ns/iter",
            "extra": "iterations: 192741\ncpu: 741.0421238864591 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 734.5718763453417,
            "unit": "ns/iter",
            "extra": "iterations: 192069\ncpu: 733.5337821303807 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 145.0132921889293,
            "unit": "ns/iter",
            "extra": "iterations: 949983\ncpu: 144.84743411197886 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.0828604417470653,
            "unit": "ns/iter",
            "extra": "iterations: 55850321\ncpu: 2.5187626047843126 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.594382813236031,
            "unit": "ns/iter",
            "extra": "iterations: 18630846\ncpu: 7.495284969882744 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 5336756.706237793,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 53308.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3542239.189147949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52604.299999999996 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11431179.04663086,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 382842.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 395869.838436587,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 17829.988052568697 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1884720.5638885498,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 52813.800000000025 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8039603.233337402,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 363256.0000000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648227337910,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 15006287.892659506,
            "unit": "ns/iter",
            "extra": "iterations: 15\ncpu: 9379973.333333336 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 154.27703584464516,
            "unit": "ns/iter",
            "extra": "iterations: 903931\ncpu: 154.15745228341547 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.9843452013723075,
            "unit": "ns/iter",
            "extra": "iterations: 46487843\ncpu: 2.977694620075188 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 3.0926627921244765,
            "unit": "ns/iter",
            "extra": "iterations: 45242873\ncpu: 3.0881173262361123 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.59457064082255,
            "unit": "ns/iter",
            "extra": "iterations: 1889071\ncpu: 74.54733040738012 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.4201406415184,
            "unit": "ns/iter",
            "extra": "iterations: 426489\ncpu: 328.0795049813713 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.79544097072527,
            "unit": "ns/iter",
            "extra": "iterations: 3705213\ncpu: 37.777801168245915 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.845412904873356,
            "unit": "ns/iter",
            "extra": "iterations: 3705184\ncpu: 37.77383255460459 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 42.812712480856696,
            "unit": "ns/iter",
            "extra": "iterations: 3282979\ncpu: 42.77669762736834 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 21.716798430397617,
            "unit": "ns/iter",
            "extra": "iterations: 6447275\ncpu: 21.70346386651724 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 807.548126318052,
            "unit": "ns/iter",
            "extra": "iterations: 173985\ncpu: 801.3736816392216 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 826.7722838870448,
            "unit": "ns/iter",
            "extra": "iterations: 173156\ncpu: 825.8997666843771 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 150.05882829603482,
            "unit": "ns/iter",
            "extra": "iterations: 911387\ncpu: 149.79465364329317 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.424474750538202,
            "unit": "ns/iter",
            "extra": "iterations: 46193949\ncpu: 3.420088635418461 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 17.958159289729963,
            "unit": "ns/iter",
            "extra": "iterations: 15344618\ncpu: 9.129715708791187 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8656961.917877197,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 37512.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9339716.43447876,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 215713 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7399878.50189209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 353173.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 2905284.881591797,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 33135.500000000015 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3178547.6207733154,
            "unit": "ns/iter",
            "extra": "iterations: 800\ncpu: 174830.25000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4227976.004282634,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 309174.1228070176 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648284004761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17395067.21496582,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 11740070.000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 220.43238382670003,
            "unit": "ns/iter",
            "extra": "iterations: 626634\ncpu: 220.38909475068382 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.824464098222877,
            "unit": "ns/iter",
            "extra": "iterations: 74904764\ncpu: 1.8239173679260245 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.7680393670756385,
            "unit": "ns/iter",
            "extra": "iterations: 80275690\ncpu: 1.7599462552112601 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 97.44127581313899,
            "unit": "ns/iter",
            "extra": "iterations: 1485641\ncpu: 97.37345697917603 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 418.14992346229604,
            "unit": "ns/iter",
            "extra": "iterations: 353115\ncpu: 383.1799838579501 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 42.56829337787067,
            "unit": "ns/iter",
            "extra": "iterations: 3223675\ncpu: 42.56092813326407 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 41.54807177954155,
            "unit": "ns/iter",
            "extra": "iterations: 3207662\ncpu: 41.44878730988484 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 45.666106458193234,
            "unit": "ns/iter",
            "extra": "iterations: 3062653\ncpu: 45.19401969468947 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.351299126682676,
            "unit": "ns/iter",
            "extra": "iterations: 6177061\ncpu: 22.344202202309486 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 923.898960321453,
            "unit": "ns/iter",
            "extra": "iterations: 156934\ncpu: 917.943849006588 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 951.4987956022927,
            "unit": "ns/iter",
            "extra": "iterations: 144332\ncpu: 949.0660421805268 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 216.37710487177173,
            "unit": "ns/iter",
            "extra": "iterations: 786415\ncpu: 177.7242295734441 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.959102886506307,
            "unit": "ns/iter",
            "extra": "iterations: 47692371\ncpu: 2.934490298249169 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.786068614995061,
            "unit": "ns/iter",
            "extra": "iterations: 16350079\ncpu: 8.388149072551883 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 11165828.773128456,
            "unit": "ns/iter",
            "extra": "iterations: 7401\ncpu: 34798.71638967707 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9217925.071716309,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 80112.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7615587.7113342285,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 285683.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4253809.452056885,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 33704.999999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4402057.647705078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 75565.60000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5193936.824798584,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 258655.99999999988 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648602952642,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 18786006.50363498,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 12179055.555555558 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 231.2395714539487,
            "unit": "ns/iter",
            "extra": "iterations: 579590\ncpu: 230.67703031453271 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.2914044253300063,
            "unit": "ns/iter",
            "extra": "iterations: 54805889\ncpu: 2.289775830476904 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.332547078570459,
            "unit": "ns/iter",
            "extra": "iterations: 54363654\ncpu: 2.315721823996599 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 96.02426571926465,
            "unit": "ns/iter",
            "extra": "iterations: 1490184\ncpu: 95.51686234720006 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 372.24382765353795,
            "unit": "ns/iter",
            "extra": "iterations: 359203\ncpu: 370.4565385032974 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 48.01431753655552,
            "unit": "ns/iter",
            "extra": "iterations: 2703794\ncpu: 47.78089602980111 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 48.11488463476784,
            "unit": "ns/iter",
            "extra": "iterations: 3031320\ncpu: 48.07562382064579 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 45.75588554080595,
            "unit": "ns/iter",
            "extra": "iterations: 2730232\ncpu: 45.36808593555424 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 22.25666305896594,
            "unit": "ns/iter",
            "extra": "iterations: 6130590\ncpu: 22.229491778115957 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 875.1895081192775,
            "unit": "ns/iter",
            "extra": "iterations: 147918\ncpu: 867.704403791289 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 870.8481736946441,
            "unit": "ns/iter",
            "extra": "iterations: 151846\ncpu: 868.0926728395885 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 187.99724771590334,
            "unit": "ns/iter",
            "extra": "iterations: 830698\ncpu: 177.2679120450513 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.350068939092669,
            "unit": "ns/iter",
            "extra": "iterations: 41598450\ncpu: 3.3905325799398778 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.877360308004972,
            "unit": "ns/iter",
            "extra": "iterations: 16883540\ncpu: 8.24570558070168 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 604508.1615447998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 23609.1 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9999563.694000244,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 266358 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 9082273.826287294,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 426707.3569482289 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 1268023.2067445456,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 30339.255922589255 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3467489.6274966067,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 227176.3277693475 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4408467.630421893,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 420789.13043478277 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648753565692,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 17875649.71230247,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11814436.363636361 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 389.09946206728677,
            "unit": "ns/iter",
            "extra": "iterations: 632103\ncpu: 235.4239736245517 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.4681348075180627,
            "unit": "ns/iter",
            "extra": "iterations: 49928673\ncpu: 2.4570110245069006 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.5962291924736745,
            "unit": "ns/iter",
            "extra": "iterations: 50791439\ncpu: 2.3552571526866957 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 86.0988421158895,
            "unit": "ns/iter",
            "extra": "iterations: 1529059\ncpu: 84.76232767996522 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 354.52217606066324,
            "unit": "ns/iter",
            "extra": "iterations: 408599\ncpu: 350.1325260218453 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 42.87950681529901,
            "unit": "ns/iter",
            "extra": "iterations: 3471688\ncpu: 42.391770228200244 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 39.62275196754647,
            "unit": "ns/iter",
            "extra": "iterations: 3395207\ncpu: 39.1347861853489 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 52.214942978215056,
            "unit": "ns/iter",
            "extra": "iterations: 3302650\ncpu: 42.00218006752153 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 28.700031848735655,
            "unit": "ns/iter",
            "extra": "iterations: 5691311\ncpu: 21.754196880121317 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1209.6613087936635,
            "unit": "ns/iter",
            "extra": "iterations: 158467\ncpu: 872.294547129685 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 1170.9037520236923,
            "unit": "ns/iter",
            "extra": "iterations: 150787\ncpu: 914.6783210754235 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 166.63769757865285,
            "unit": "ns/iter",
            "extra": "iterations: 725693\ncpu: 166.36635602107228 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.236291918410646,
            "unit": "ns/iter",
            "extra": "iterations: 44321891\ncpu: 3.230536801780412 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.29520167985428,
            "unit": "ns/iter",
            "extra": "iterations: 16928371\ncpu: 8.256305346805076 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8159198.760986328,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 66347 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3798063.707169917,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 203319.44091486663 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 8744617.512351587,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 406889.99999999994 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 322708.0878112036,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 21034.084688455965 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2528052.515797801,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 189695.58441558445 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7563414.573669434,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 407665.9999999998 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2034c9bcfa9cf6a995891efed36264088a333d37",
          "message": "Don't show coverage annotation for pull requests (#1304)",
          "timestamp": "2022-04-01T19:57:31+02:00",
          "tree_id": "472a4abf8828b68d3ea17a4767b6eb152308f526",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2034c9bcfa9cf6a995891efed36264088a333d37"
        },
        "date": 1648836575589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 16864971.681074664,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11288172.727272728 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 215.6775456727497,
            "unit": "ns/iter",
            "extra": "iterations: 682471\ncpu: 205.14395483471094 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6799014921285444,
            "unit": "ns/iter",
            "extra": "iterations: 86085508\ncpu: 1.6262353937668579 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6706105535420022,
            "unit": "ns/iter",
            "extra": "iterations: 86237165\ncpu: 1.62516474190681 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 89.67819330239949,
            "unit": "ns/iter",
            "extra": "iterations: 1644244\ncpu: 84.98252084240536 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.8626900427689,
            "unit": "ns/iter",
            "extra": "iterations: 426888\ncpu: 328.1450872359964 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.58482989030695,
            "unit": "ns/iter",
            "extra": "iterations: 3734977\ncpu: 37.49501000943246 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.704269712432904,
            "unit": "ns/iter",
            "extra": "iterations: 3735634\ncpu: 37.50190730676504 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 41.67419713930346,
            "unit": "ns/iter",
            "extra": "iterations: 3367708\ncpu: 41.5567501695515 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.15386985117487,
            "unit": "ns/iter",
            "extra": "iterations: 6969370\ncpu: 20.087324966245156 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 803.041686373625,
            "unit": "ns/iter",
            "extra": "iterations: 173609\ncpu: 802.1726984200131 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 811.3258665047709,
            "unit": "ns/iter",
            "extra": "iterations: 173581\ncpu: 807.088909500464 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.81062410898892,
            "unit": "ns/iter",
            "extra": "iterations: 838951\ncpu: 165.52396981468524 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5031802630684825,
            "unit": "ns/iter",
            "extra": "iterations: 55993281\ncpu: 2.4983997633573214 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.495803718273014,
            "unit": "ns/iter",
            "extra": "iterations: 18716603\ncpu: 7.473557033827132 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 470928.69069080986,
            "unit": "ns/iter",
            "extra": "iterations: 8015\ncpu: 17537.87897691828 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8906373.977661133,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 190174.9999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11301138.401031494,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 360415.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 343715.10234399297,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 17540.702947845806 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2222485.6909771007,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 161168.04008908692 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7862789.630889893,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 347246.9999999994 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648848051500,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributseHashMap",
            "value": 19494078.376076438,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 12704827.272727273 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 205.269565458813,
            "unit": "ns/iter",
            "extra": "iterations: 680984\ncpu: 204.79614792711723 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.44552157338538,
            "unit": "ns/iter",
            "extra": "iterations: 97184428\ncpu: 1.4348615603314558 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4367671775685376,
            "unit": "ns/iter",
            "extra": "iterations: 97701911\ncpu: 1.4335082964753887 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.4124721299444,
            "unit": "ns/iter",
            "extra": "iterations: 1868393\ncpu: 74.83671797100502 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 292.2175446286509,
            "unit": "ns/iter",
            "extra": "iterations: 483352\ncpu: 290.2269981297274 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 33.0695379840097,
            "unit": "ns/iter",
            "extra": "iterations: 4260110\ncpu: 32.85602953914336 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 33.89239981023003,
            "unit": "ns/iter",
            "extra": "iterations: 4258970\ncpu: 32.86867482043778 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.659894526542224,
            "unit": "ns/iter",
            "extra": "iterations: 3944395\ncpu: 35.509197227965274 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.132434208521012,
            "unit": "ns/iter",
            "extra": "iterations: 7750693\ncpu: 18.066397417624458 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 714.8690450713412,
            "unit": "ns/iter",
            "extra": "iterations: 198532\ncpu: 712.387423689884 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 712.964752923716,
            "unit": "ns/iter",
            "extra": "iterations: 196897\ncpu: 710.4095034459646 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributeMapHash",
            "value": 165.515454981291,
            "unit": "ns/iter",
            "extra": "iterations: 844793\ncpu: 165.07262725898534 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5118483512149457,
            "unit": "ns/iter",
            "extra": "iterations: 55949645\ncpu: 2.5045109758962725 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.336893009601795,
            "unit": "ns/iter",
            "extra": "iterations: 18687946\ncpu: 7.550134188101785 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 18955085.277557373,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 53394 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7757492.0654296875,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 101160.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6676383.018493652,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 170687.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3767801.7616271973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 51419.5 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3769349.8134613037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 97117.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4651035.238432405,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 161586.35346756157 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48a40601061905542a52dd11109a868517a6e304",
          "message": "Add `async-changes` branch to pull_request of github action (#1309)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-04T13:09:48-07:00",
          "tree_id": "7e11595736b57f690103f0f4a25827ef3145b41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/48a40601061905542a52dd11109a868517a6e304"
        },
        "date": 1649103787158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 165.97587557714678,
            "unit": "ns/iter",
            "extra": "iterations: 840664\ncpu: 164.80924602457105 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 455575.28486417624,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 17310.02771478962 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 9095234.870910645,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 57608.999999999854 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6886355.876922607,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 247939.0000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 325803.744785483,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 17427.47967479675 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1197889.0895843506,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48979.60000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8055620.193481445,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 266968.99999999965 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.503057674377212,
            "unit": "ns/iter",
            "extra": "iterations: 55990594\ncpu: 2.496442527471668 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.48526998474782,
            "unit": "ns/iter",
            "extra": "iterations: 17847559\ncpu: 7.479857609659673 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6281031704288584,
            "unit": "ns/iter",
            "extra": "iterations: 85981354\ncpu: 1.6246068886051739 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6272942428737798,
            "unit": "ns/iter",
            "extra": "iterations: 86175589\ncpu: 1.624468154200838 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.94440378391552,
            "unit": "ns/iter",
            "extra": "iterations: 1650521\ncpu: 84.75366263137518 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 337.8381941933729,
            "unit": "ns/iter",
            "extra": "iterations: 425239\ncpu: 329.14125938589837 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.24732599549584,
            "unit": "ns/iter",
            "extra": "iterations: 3767380\ncpu: 37.17721599626264 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 38.179781486343025,
            "unit": "ns/iter",
            "extra": "iterations: 3764837\ncpu: 37.1856205195603 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.285759624631396,
            "unit": "ns/iter",
            "extra": "iterations: 3479082\ncpu: 40.2306700445692 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.90178270324868,
            "unit": "ns/iter",
            "extra": "iterations: 6853037\ncpu: 20.47667333475653 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 803.4239023037363,
            "unit": "ns/iter",
            "extra": "iterations: 175282\ncpu: 798.2182996542709 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 804.2126444279273,
            "unit": "ns/iter",
            "extra": "iterations: 174221\ncpu: 802.433690542473 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 206.16067759709838,
            "unit": "ns/iter",
            "extra": "iterations: 683447\ncpu: 204.88552879740493 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 16738931.33799235,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10632175.000000002 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be75bbc862a81319f8f9cae11c14f79f2c776aa9",
          "message": "Add InstrumentationInfo and Resource to the metrics data to be exported. (#1299)",
          "timestamp": "2022-04-04T22:09:02Z",
          "tree_id": "83c28eccef1b5a9839523c88c9f1175c1d2d7cc2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/be75bbc862a81319f8f9cae11c14f79f2c776aa9"
        },
        "date": 1649110813640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 146.61516097003675,
            "unit": "ns/iter",
            "extra": "iterations: 955410\ncpu: 146.44341172899595 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 429285.8738525498,
            "unit": "ns/iter",
            "extra": "iterations: 9097\ncpu: 15584.753215345721 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2054177.103815852,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 153774.8108108108 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12533168.79272461,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 403457.9999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 290031.5889761876,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 15562.841894596397 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1943183.404730525,
            "unit": "ns/iter",
            "extra": "iterations: 934\ncpu: 150933.51177730196 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7504825.592041016,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 339842.00000000023 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.2593755081844336,
            "unit": "ns/iter",
            "extra": "iterations: 63549993\ncpu: 2.2056099990443743 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.884616083399622,
            "unit": "ns/iter",
            "extra": "iterations: 21213857\ncpu: 6.611188149330885 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4396525613253757,
            "unit": "ns/iter",
            "extra": "iterations: 97249236\ncpu: 1.4364174542204116 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4454511720193177,
            "unit": "ns/iter",
            "extra": "iterations: 97576615\ncpu: 1.4373064693830588 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.86215190844692,
            "unit": "ns/iter",
            "extra": "iterations: 1867653\ncpu: 74.85250204400928 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 292.827208867647,
            "unit": "ns/iter",
            "extra": "iterations: 482927\ncpu: 290.77231134312234 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 32.8265101768283,
            "unit": "ns/iter",
            "extra": "iterations: 4257092\ncpu: 32.79071723138704 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.8769516418448,
            "unit": "ns/iter",
            "extra": "iterations: 4260162\ncpu: 32.817038413093194 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.66001788633921,
            "unit": "ns/iter",
            "extra": "iterations: 3935790\ncpu: 35.47671496700788 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.031430152223237,
            "unit": "ns/iter",
            "extra": "iterations: 7746191\ncpu: 18.025891693091477 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 710.1364894476699,
            "unit": "ns/iter",
            "extra": "iterations: 198494\ncpu: 707.1075196227597 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 708.4908902296298,
            "unit": "ns/iter",
            "extra": "iterations: 197365\ncpu: 708.2968104780485 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 183.2525443444816,
            "unit": "ns/iter",
            "extra": "iterations: 770497\ncpu: 180.87013966310056 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 16546401.110562412,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 10770118.181818182 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649130881259,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 162.58124726847885,
            "unit": "ns/iter",
            "extra": "iterations: 814484\ncpu: 162.47133154242442 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 512665.0333404541,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 24637.700000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 4261182.78503418,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 82224.70000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11063747.40600586,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 157959.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 334453.94730714464,
            "unit": "ns/iter",
            "extra": "iterations: 6671\ncpu: 20840.398740818473 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1294804.334640503,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 63957.5 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7847557.067871094,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 161049.00000000035 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.228750080035246,
            "unit": "ns/iter",
            "extra": "iterations: 43411660\ncpu: 3.5108701210688555 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 10.584806405435137,
            "unit": "ns/iter",
            "extra": "iterations: 16748395\ncpu: 8.163827041337393 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.2198206117560955,
            "unit": "ns/iter",
            "extra": "iterations: 59218402\ncpu: 2.2178376241898596 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.4656567773310316,
            "unit": "ns/iter",
            "extra": "iterations: 62415572\ncpu: 2.1370308037872348 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 89.17784848871825,
            "unit": "ns/iter",
            "extra": "iterations: 1633466\ncpu: 88.78991053379744 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 334.0793356414415,
            "unit": "ns/iter",
            "extra": "iterations: 411609\ncpu: 333.2354248813801 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 36.54706734030633,
            "unit": "ns/iter",
            "extra": "iterations: 3356107\ncpu: 36.311118805210945 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.31178555402674,
            "unit": "ns/iter",
            "extra": "iterations: 4001349\ncpu: 37.24441432127015 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 38.127264772346216,
            "unit": "ns/iter",
            "extra": "iterations: 3488471\ncpu: 38.062463468952444 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 19.780717669312228,
            "unit": "ns/iter",
            "extra": "iterations: 6382552\ncpu: 19.61389425421054 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 903.6793366441547,
            "unit": "ns/iter",
            "extra": "iterations: 166843\ncpu: 902.2895776268713 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 835.0560688838187,
            "unit": "ns/iter",
            "extra": "iterations: 180919\ncpu: 831.3764723439776 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 240.32996924769455,
            "unit": "ns/iter",
            "extra": "iterations: 566799\ncpu: 240.19290789151003 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 14465676.413642036,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 13907766.666666666 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd338cc9f96cd2ad2af7b3bed496c10c22098582",
          "message": "Bump codecov/codecov-action from 2.1.0 to 3 (#1318)",
          "timestamp": "2022-04-05T23:05:14-07:00",
          "tree_id": "259c56f90bbd7d91b82098b8fd1c20ac74aa0074",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd338cc9f96cd2ad2af7b3bed496c10c22098582"
        },
        "date": 1649225799139,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 166.10200164392285,
            "unit": "ns/iter",
            "extra": "iterations: 841695\ncpu: 165.3944718692638 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 8592858.31451416,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 68427.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2762065.4106140137,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 46549.6 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10144269.466400146,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 323500.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 299499.1455577217,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 16525.273619323187 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1425457.7159881592,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 49327.699999999975 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8426752.090454102,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 282776.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.744367236733855,
            "unit": "ns/iter",
            "extra": "iterations: 63450626\ncpu: 2.2045046490163864 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.7028234297971965,
            "unit": "ns/iter",
            "extra": "iterations: 21251114\ncpu: 6.58741466447359 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6307900989178206,
            "unit": "ns/iter",
            "extra": "iterations: 85911180\ncpu: 1.6248036635045637 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6372190857341322,
            "unit": "ns/iter",
            "extra": "iterations: 86205835\ncpu: 1.6247357269957423 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.91807337857044,
            "unit": "ns/iter",
            "extra": "iterations: 1651263\ncpu: 84.80223925564853 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 357.57183480939864,
            "unit": "ns/iter",
            "extra": "iterations: 395706\ncpu: 357.3526810308662 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.36428844105679,
            "unit": "ns/iter",
            "extra": "iterations: 3767583\ncpu: 37.15665985327996 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.38681925331277,
            "unit": "ns/iter",
            "extra": "iterations: 3766843\ncpu: 37.16231337488712 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.455308255995455,
            "unit": "ns/iter",
            "extra": "iterations: 3479488\ncpu: 40.20965153493849 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.478677083793922,
            "unit": "ns/iter",
            "extra": "iterations: 6856863\ncpu: 20.415429038030958 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 807.3231857621057,
            "unit": "ns/iter",
            "extra": "iterations: 174032\ncpu: 803.3976510067116 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 808.2645864591086,
            "unit": "ns/iter",
            "extra": "iterations: 173483\ncpu: 806.2132889101534 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 180.9656778583272,
            "unit": "ns/iter",
            "extra": "iterations: 773263\ncpu: 180.58254436071556 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 24948199.5900472,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10609716.666666666 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74ec691e4a73c3160f2bb2aaf0a9626fb282beec",
          "message": "Move public definitions into `opentelemetry_api`. (#1314)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-06T23:06:59-07:00",
          "tree_id": "7bc735649612f995f158ea1b471f1b41e41e9667",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/74ec691e4a73c3160f2bb2aaf0a9626fb282beec"
        },
        "date": 1649312358420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 165.29651437474126,
            "unit": "ns/iter",
            "extra": "iterations: 846499\ncpu: 164.96321909417497 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 418408.8266565959,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 16456.425277327682 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 2404387.950897217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 44213.30000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11547718.048095703,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 276709 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 271940.98955486907,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 14910.430758276972 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1239677.906036377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 47945.699999999975 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8381781.578063965,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 251280.99999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.4989106136239196,
            "unit": "ns/iter",
            "extra": "iterations: 55983429\ncpu: 2.496422646779996 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.72135534234764,
            "unit": "ns/iter",
            "extra": "iterations: 18740178\ncpu: 7.478514878567323 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.4366701266440631,
            "unit": "ns/iter",
            "extra": "iterations: 97642628\ncpu: 1.4345097307294925 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4744997576178598,
            "unit": "ns/iter",
            "extra": "iterations: 97626967\ncpu: 1.4353728719237993 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 75.06873899096095,
            "unit": "ns/iter",
            "extra": "iterations: 1870755\ncpu: 74.68936338537118 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 290.36421952870853,
            "unit": "ns/iter",
            "extra": "iterations: 481623\ncpu: 289.75526501018436 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 32.7079133888864,
            "unit": "ns/iter",
            "extra": "iterations: 4319668\ncpu: 32.610168188851546 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 32.73557138677218,
            "unit": "ns/iter",
            "extra": "iterations: 4286405\ncpu: 32.64626184413281 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.350589058953176,
            "unit": "ns/iter",
            "extra": "iterations: 3964265\ncpu: 35.33035758204865 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 17.91772254166293,
            "unit": "ns/iter",
            "extra": "iterations: 7813765\ncpu: 17.901664562474057 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 706.2351817166165,
            "unit": "ns/iter",
            "extra": "iterations: 198573\ncpu: 705.5788047720484 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 706.8285355927496,
            "unit": "ns/iter",
            "extra": "iterations: 198154\ncpu: 704.3854779615851 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 180.78672323591883,
            "unit": "ns/iter",
            "extra": "iterations: 775185\ncpu: 180.18473009668656 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 12718200.68359375,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 12220841.666666666 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b87300b5a354cf377f164eecd914e80171a69e6",
          "message": "Add building test without RTTI (#1294)",
          "timestamp": "2022-04-07T08:56:44-07:00",
          "tree_id": "52e8a0059af0fce5645e312e7435d156a955ccf8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6b87300b5a354cf377f164eecd914e80171a69e6"
        },
        "date": 1649347873719,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 191.7355199180085,
            "unit": "ns/iter",
            "extra": "iterations: 708258\ncpu: 190.95640289273123 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 542587.2802734375,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 19515.100000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7604609.727859497,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68820.3 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10007209.777832031,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 129182.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 351253.9905845712,
            "unit": "ns/iter",
            "extra": "iterations: 6883\ncpu: 18763.95467092838 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1406755.2089691162,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 53542.29999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8242156.505584717,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 134160.00000000038 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.582379437574093,
            "unit": "ns/iter",
            "extra": "iterations: 48458668\ncpu: 2.9278435800175115 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 12.387192990147396,
            "unit": "ns/iter",
            "extra": "iterations: 15515405\ncpu: 9.11025525920851 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 17190118.63072713,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 12460883.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 232.35492805853798,
            "unit": "ns/iter",
            "extra": "iterations: 600052\ncpu: 232.169711958297 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.8832347778894387,
            "unit": "ns/iter",
            "extra": "iterations: 69749946\ncpu: 1.8795541433107348 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8678003069663396,
            "unit": "ns/iter",
            "extra": "iterations: 74072114\ncpu: 1.8652350059834932 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 99.19062650083185,
            "unit": "ns/iter",
            "extra": "iterations: 1385576\ncpu: 98.96064885650445 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 386.128226106671,
            "unit": "ns/iter",
            "extra": "iterations: 356699\ncpu: 385.5474784061632 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 43.976549500575636,
            "unit": "ns/iter",
            "extra": "iterations: 3184054\ncpu: 43.911064322401536 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.1319004774598,
            "unit": "ns/iter",
            "extra": "iterations: 3346760\ncpu: 44.011222794583375 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 46.84302316838115,
            "unit": "ns/iter",
            "extra": "iterations: 3050548\ncpu: 46.81303162579309 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.583572951031552,
            "unit": "ns/iter",
            "extra": "iterations: 5738810\ncpu: 23.542912206537586 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 985.2769542987623,
            "unit": "ns/iter",
            "extra": "iterations: 150674\ncpu: 925.0879381976981 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 936.7384766198204,
            "unit": "ns/iter",
            "extra": "iterations: 148647\ncpu: 935.2735003060949 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649351812625,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 205.57057004118892,
            "unit": "ns/iter",
            "extra": "iterations: 704644\ncpu: 198.29176151361543 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 524044.0368652344,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20913.4 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6770596.504211426,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 94884.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7105720.043182373,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 431908.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4534640.073776245,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 49696.3 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4722756.147384644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 95770.4 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5880534.648895264,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 332915.0000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.998712020858925,
            "unit": "ns/iter",
            "extra": "iterations: 46675535\ncpu: 2.997064736376348 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.026489921533027,
            "unit": "ns/iter",
            "extra": "iterations: 15607302\ncpu: 8.971307148410402 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 17569017.41027832,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 14480550 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 245.97003837205105,
            "unit": "ns/iter",
            "extra": "iterations: 567516\ncpu: 245.78514085946475 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9529183302969835,
            "unit": "ns/iter",
            "extra": "iterations: 71684221\ncpu: 1.952111609052709 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9563539552513811,
            "unit": "ns/iter",
            "extra": "iterations: 71713229\ncpu: 1.9529590558528604 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.53325330844835,
            "unit": "ns/iter",
            "extra": "iterations: 1379813\ncpu: 101.50650849064331 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 394.8372684227846,
            "unit": "ns/iter",
            "extra": "iterations: 355375\ncpu: 394.23932465705263 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.805183713837195,
            "unit": "ns/iter",
            "extra": "iterations: 3134368\ncpu: 44.68980668511163 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.72011416139484,
            "unit": "ns/iter",
            "extra": "iterations: 3134242\ncpu: 44.6410009182443 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.479488165602376,
            "unit": "ns/iter",
            "extra": "iterations: 2897195\ncpu: 48.28063005769373 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.50297855272881,
            "unit": "ns/iter",
            "extra": "iterations: 5715989\ncpu: 24.502233996601458 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 943.9450822529468,
            "unit": "ns/iter",
            "extra": "iterations: 148037\ncpu: 943.2067658760975 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 947.67755659617,
            "unit": "ns/iter",
            "extra": "iterations: 148456\ncpu: 947.4746726302751 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d72dcb69b07ffe773e490ee797126357480b9cb0",
          "message": "[ETW Exporter] - ETW provider handle cleanup (#1322)",
          "timestamp": "2022-04-11T00:45:36-07:00",
          "tree_id": "75feeddd4fd22f74bedd9796d4dfee51734f4a4c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/d72dcb69b07ffe773e490ee797126357480b9cb0"
        },
        "date": 1649663866504,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 166.52047237220043,
            "unit": "ns/iter",
            "extra": "iterations: 844727\ncpu: 165.79865447653503 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 14230835.437774658,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 48860.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6012122.631072998,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 307173 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6133949.756622314,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 476417 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3465028.762817383,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48411.10000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3766212.0092482795,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 280540.38095238095 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4980317.451668985,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 455101.2578616351 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5126606207840876,
            "unit": "ns/iter",
            "extra": "iterations: 55926624\ncpu: 2.499902372079531 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.487078009830804,
            "unit": "ns/iter",
            "extra": "iterations: 18715552\ncpu: 7.479902275925393 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 17554144.06458537,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 11529716.66666667 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 228.73559236748983,
            "unit": "ns/iter",
            "extra": "iterations: 681524\ncpu: 204.93203467522792 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6320410846681077,
            "unit": "ns/iter",
            "extra": "iterations: 85900110\ncpu: 1.6290980302586342 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.6377853713879522,
            "unit": "ns/iter",
            "extra": "iterations: 86082861\ncpu: 1.6279198712970286 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.85592142935866,
            "unit": "ns/iter",
            "extra": "iterations: 1651239\ncpu: 84.75544727322938 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 330.1391811991904,
            "unit": "ns/iter",
            "extra": "iterations: 424924\ncpu: 329.9728892696106 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.290285220497225,
            "unit": "ns/iter",
            "extra": "iterations: 3755163\ncpu: 37.26570590943723 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.298236813539674,
            "unit": "ns/iter",
            "extra": "iterations: 3759489\ncpu: 37.163428327626406 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 45.980240236678206,
            "unit": "ns/iter",
            "extra": "iterations: 3481479\ncpu: 40.35270642160992 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.471438414878516,
            "unit": "ns/iter",
            "extra": "iterations: 6837206\ncpu: 20.43698844235495 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 790.3026202779429,
            "unit": "ns/iter",
            "extra": "iterations: 176723\ncpu: 789.6278356524067 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 866.5179832908115,
            "unit": "ns/iter",
            "extra": "iterations: 177254\ncpu: 794.8491994538915 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649689753119,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 223.39912995605138,
            "unit": "ns/iter",
            "extra": "iterations: 697138\ncpu: 221.9781449296983 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 529430.8662414551,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20839.600000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5643446.445465088,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 70006.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 13480131.62612915,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 427737 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 377973.2680820919,
            "unit": "ns/iter",
            "extra": "iterations: 6864\ncpu: 20679.020979020985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1787918.3292388916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 60076.30000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8557655.811309814,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 413467.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.2461825668624824,
            "unit": "ns/iter",
            "extra": "iterations: 46548279\ncpu: 3.02378526174942 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.997377497352321,
            "unit": "ns/iter",
            "extra": "iterations: 15575232\ncpu: 8.977343002017562 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 19943356.51397705,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12576200.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 304.99987532862775,
            "unit": "ns/iter",
            "extra": "iterations: 563782\ncpu: 245.89007807982512 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9549815288164973,
            "unit": "ns/iter",
            "extra": "iterations: 71401978\ncpu: 1.9527050076960057 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9832786488737066,
            "unit": "ns/iter",
            "extra": "iterations: 71702578\ncpu: 1.9585990339147918 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 101.9885492115754,
            "unit": "ns/iter",
            "extra": "iterations: 1372980\ncpu: 101.95538172442427 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 395.1973295046681,
            "unit": "ns/iter",
            "extra": "iterations: 354644\ncpu: 394.6473082866198 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 44.66347998623721,
            "unit": "ns/iter",
            "extra": "iterations: 3138275\ncpu: 44.62078689726044 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.98271512693177,
            "unit": "ns/iter",
            "extra": "iterations: 3137909\ncpu: 44.647598129837434 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 48.28030701857845,
            "unit": "ns/iter",
            "extra": "iterations: 2900629\ncpu: 48.25767100859853 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.51269417316167,
            "unit": "ns/iter",
            "extra": "iterations: 5712887\ncpu: 24.509586834117336 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 969.1642772825294,
            "unit": "ns/iter",
            "extra": "iterations: 147392\ncpu: 950.1743649587495 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 972.9517242182716,
            "unit": "ns/iter",
            "extra": "iterations: 147362\ncpu: 952.478250838072 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649787959359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 265.0795467711251,
            "unit": "ns/iter",
            "extra": "iterations: 709274\ncpu: 199.2820828057986 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 672918.0812835693,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 21578.5 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6619597.1965789795,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 73199.19999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 11247905.850772066,
            "unit": "ns/iter",
            "extra": "iterations: 989\ncpu: 151810.71789686556 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4216000.080108643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 43254.999999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4440041.780471802,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 83352.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5348904.132843018,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 145259.00000000035 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 4.280129233889692,
            "unit": "ns/iter",
            "extra": "iterations: 43331714\ncpu: 3.200574987640692 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 11.543849329094494,
            "unit": "ns/iter",
            "extra": "iterations: 15533326\ncpu: 8.984154456038585 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 19340011.808607314,
            "unit": "ns/iter",
            "extra": "iterations: 9\ncpu: 12952977.77777778 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 245.82651669947143,
            "unit": "ns/iter",
            "extra": "iterations: 568888\ncpu: 245.64606741573033 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9097084306029923,
            "unit": "ns/iter",
            "extra": "iterations: 72848371\ncpu: 1.905334300474612 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.8955966583135537,
            "unit": "ns/iter",
            "extra": "iterations: 75593136\ncpu: 1.8894453591659433 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 100.45146942138672,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 100.2517 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 377.4627285100138,
            "unit": "ns/iter",
            "extra": "iterations: 369308\ncpu: 377.1610688097739 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 41.95313057797578,
            "unit": "ns/iter",
            "extra": "iterations: 3327842\ncpu: 41.92744126674284 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 42.64365777384339,
            "unit": "ns/iter",
            "extra": "iterations: 3327566\ncpu: 42.490306728702016 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 46.79846738231445,
            "unit": "ns/iter",
            "extra": "iterations: 3021168\ncpu: 46.53230141455224 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.584290435972903,
            "unit": "ns/iter",
            "extra": "iterations: 6068408\ncpu: 23.545582300992308 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 903.3917652250209,
            "unit": "ns/iter",
            "extra": "iterations: 154803\ncpu: 902.7079578561137 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 956.6776728924331,
            "unit": "ns/iter",
            "extra": "iterations: 149242\ncpu: 928.9000415432645 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da2911cf4458c7068f967c17c65d07eeba449a08",
          "message": "Prepare v1.3.0 release (#1324)",
          "timestamp": "2022-04-12T12:46:07-07:00",
          "tree_id": "c6220ed40da1d737bd27e307c20025ace70dee7c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da2911cf4458c7068f967c17c65d07eeba449a08"
        },
        "date": 1649793486772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 171.445133769367,
            "unit": "ns/iter",
            "extra": "iterations: 819855\ncpu: 170.80776478767586 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 576466.9354903827,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 18044.88975514679 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7429181.098937988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 67961.59999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7197270.393371582,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 238771.0000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3848606.1096191406,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 33121.999999999985 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3903879.404067993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 68522.69999999998 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4883742.904009884,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 234808.04794520553 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.5104466017293423,
            "unit": "ns/iter",
            "extra": "iterations: 55985444\ncpu: 2.497927854247258 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.50289118106991,
            "unit": "ns/iter",
            "extra": "iterations: 18744745\ncpu: 7.46748488709769 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 16738588.159734553,
            "unit": "ns/iter",
            "extra": "iterations: 11\ncpu: 11088336.363636365 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 204.89724830294676,
            "unit": "ns/iter",
            "extra": "iterations: 682567\ncpu: 204.66913870726245 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6272870790823923,
            "unit": "ns/iter",
            "extra": "iterations: 85967627\ncpu: 1.624798832704781 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.627597256202616,
            "unit": "ns/iter",
            "extra": "iterations: 86052172\ncpu: 1.6247004201125803 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.38748513294989,
            "unit": "ns/iter",
            "extra": "iterations: 1654633\ncpu: 84.30244048075917 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.312286612187,
            "unit": "ns/iter",
            "extra": "iterations: 425524\ncpu: 328.8895573457667 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.195439186447224,
            "unit": "ns/iter",
            "extra": "iterations: 3770424\ncpu: 37.1440983825692 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.29129306169725,
            "unit": "ns/iter",
            "extra": "iterations: 3769338\ncpu: 37.15023699121701 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 43.995845767831774,
            "unit": "ns/iter",
            "extra": "iterations: 3193176\ncpu: 43.865762488506775 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.4341934968852,
            "unit": "ns/iter",
            "extra": "iterations: 6857602\ncpu: 20.41410393895712 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 816.8153827369418,
            "unit": "ns/iter",
            "extra": "iterations: 171523\ncpu: 816.0509086244988 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 818.0409114205883,
            "unit": "ns/iter",
            "extra": "iterations: 176882\ncpu: 817.1933831593949 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649799943228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 222.86712756530022,
            "unit": "ns/iter",
            "extra": "iterations: 843877\ncpu: 165.66940442742248 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 490215.47060905595,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 18352.796032238068 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 3427562.2367858887,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 53062.39999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 13589935.302734375,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 352649.0000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 316972.7481858405,
            "unit": "ns/iter",
            "extra": "iterations: 7926\ncpu: 17597.06030784759 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1045590.6391143799,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 48596.90000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 6189455.986022949,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 278301.00000000023 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.40135319730298,
            "unit": "ns/iter",
            "extra": "iterations: 55735368\ncpu: 2.5389138903685 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.8711468972048735,
            "unit": "ns/iter",
            "extra": "iterations: 18813816\ncpu: 7.444103843685938 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 16345381.736755371,
            "unit": "ns/iter",
            "extra": "iterations: 12\ncpu: 10736008.333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 258.0389444971496,
            "unit": "ns/iter",
            "extra": "iterations: 680659\ncpu: 206.3855763311732 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6273671082031134,
            "unit": "ns/iter",
            "extra": "iterations: 85902746\ncpu: 1.6248281515936638 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.7098574695365691,
            "unit": "ns/iter",
            "extra": "iterations: 86176119\ncpu: 1.6580254675892285 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.68625086634398,
            "unit": "ns/iter",
            "extra": "iterations: 1654960\ncpu: 84.77775897906896 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.58944213009534,
            "unit": "ns/iter",
            "extra": "iterations: 424573\ncpu: 329.16035640514116 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.28927924082391,
            "unit": "ns/iter",
            "extra": "iterations: 3761722\ncpu: 37.184831840311425 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.45662168167779,
            "unit": "ns/iter",
            "extra": "iterations: 3761631\ncpu: 37.19033047101107 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.394252966376015,
            "unit": "ns/iter",
            "extra": "iterations: 3541480\ncpu: 39.55750138360232 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 26.242831377394324,
            "unit": "ns/iter",
            "extra": "iterations: 6859282\ncpu: 20.44620705199175 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 795.4397453874083,
            "unit": "ns/iter",
            "extra": "iterations: 176346\ncpu: 793.2989690721646 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 800.627898941144,
            "unit": "ns/iter",
            "extra": "iterations: 176747\ncpu: 795.4347174209462 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67091862+juandemanjon@users.noreply.github.com",
            "name": "jmanjon",
            "username": "juandemanjon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7f051edf72c6b162ba27fe624d2a6a05e2210d6",
          "message": "Fix for #1292 (#1326)",
          "timestamp": "2022-04-14T09:51:47+05:30",
          "tree_id": "f9d4980e62b4f95b38ab8db49781e7157f1d219c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e7f051edf72c6b162ba27fe624d2a6a05e2210d6"
        },
        "date": 1649910945889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 197.06224041960814,
            "unit": "ns/iter",
            "extra": "iterations: 720202\ncpu: 196.82616821391775 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 518052.8163909912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20860.3 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 7692029.4761657715,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 92613 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 7149260.0440979,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 146478.99999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 4222185.6117248535,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 38311.40000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 4725784.3017578125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 82287.00000000001 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 5389261.245727539,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 147034.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.9743627604635865,
            "unit": "ns/iter",
            "extra": "iterations: 46516573\ncpu: 2.9693352517607003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 8.981881816987228,
            "unit": "ns/iter",
            "extra": "iterations: 15676772\ncpu: 8.968695851416351 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 21230340.003967285,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 12782760.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 243.31710458364822,
            "unit": "ns/iter",
            "extra": "iterations: 580797\ncpu: 242.52243038445445 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.9461255052636357,
            "unit": "ns/iter",
            "extra": "iterations: 72338711\ncpu: 1.9412648920437634 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.9279859052488737,
            "unit": "ns/iter",
            "extra": "iterations: 73650486\ncpu: 1.9187734891525363 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 99.75935283460115,
            "unit": "ns/iter",
            "extra": "iterations: 1387760\ncpu: 99.49638265982591 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 390.2790885511317,
            "unit": "ns/iter",
            "extra": "iterations: 361459\ncpu: 388.271422208328 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 43.920565557306745,
            "unit": "ns/iter",
            "extra": "iterations: 3221405\ncpu: 43.419781120349654 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 44.96333152119129,
            "unit": "ns/iter",
            "extra": "iterations: 3161755\ncpu: 44.38990370854161 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 49.76769337689534,
            "unit": "ns/iter",
            "extra": "iterations: 2903155\ncpu: 48.260771471037536 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 24.34526157440983,
            "unit": "ns/iter",
            "extra": "iterations: 5715942\ncpu: 24.30678967701213 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 951.501659032292,
            "unit": "ns/iter",
            "extra": "iterations: 152094\ncpu: 949.2221915394429 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 924.4840130561794,
            "unit": "ns/iter",
            "extra": "iterations: 150760\ncpu: 923.220350225525 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649955954571,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 166.65584564928332,
            "unit": "ns/iter",
            "extra": "iterations: 848480\ncpu: 165.20483688478222 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 673226.1180877686,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 20996.7 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8350788.222418891,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 244510.86419753087 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12573227.882385254,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 484569.9999999997 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 317285.5528106293,
            "unit": "ns/iter",
            "extra": "iterations: 8089\ncpu: 17460.934602546673 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 2625155.448913574,
            "unit": "ns/iter",
            "extra": "iterations: 780\ncpu: 182090.2564102564 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8132452.964782715,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 402291.99999999965 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.523219283920902,
            "unit": "ns/iter",
            "extra": "iterations: 55724720\ncpu: 2.5109771749413903 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.457745662294613,
            "unit": "ns/iter",
            "extra": "iterations: 18849329\ncpu: 7.423924745543992 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 20104830.08164626,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 11187130.76923077 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 247.2474979284452,
            "unit": "ns/iter",
            "extra": "iterations: 681723\ncpu: 205.934815166864 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6266727448241733,
            "unit": "ns/iter",
            "extra": "iterations: 85990860\ncpu: 1.6246808090999443 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.7849424108361773,
            "unit": "ns/iter",
            "extra": "iterations: 86183016\ncpu: 1.6255163314312424 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 84.5106639203479,
            "unit": "ns/iter",
            "extra": "iterations: 1656422\ncpu: 84.50962375529909 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 328.96542952815446,
            "unit": "ns/iter",
            "extra": "iterations: 426243\ncpu: 328.69443017246044 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.156859689796576,
            "unit": "ns/iter",
            "extra": "iterations: 3767441\ncpu: 37.143753545178285 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.15633611815397,
            "unit": "ns/iter",
            "extra": "iterations: 3768232\ncpu: 37.154108345770645 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 39.571908419352596,
            "unit": "ns/iter",
            "extra": "iterations: 3541999\ncpu: 39.53439851338188 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.51841942590183,
            "unit": "ns/iter",
            "extra": "iterations: 6856259\ncpu: 20.419969548991645 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 791.2777130277184,
            "unit": "ns/iter",
            "extra": "iterations: 176730\ncpu: 789.5744921631866 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 793.0096932759226,
            "unit": "ns/iter",
            "extra": "iterations: 177356\ncpu: 791.896524504386 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3304d7897fe72f628da5a567166970b103e17b6",
          "message": "fix metrics compiler warnings (#1328)",
          "timestamp": "2022-04-15T12:50:47+05:30",
          "tree_id": "6b8621d7f00361094390222c31b3fde0c93b8d95",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e3304d7897fe72f628da5a567166970b103e17b6"
        },
        "date": 1650007964449,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 165.57123276244434,
            "unit": "ns/iter",
            "extra": "iterations: 847217\ncpu: 165.24845464621225 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 14763492.584228516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 37957.6 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 8050241.470336914,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 77624.99999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 6542382.24029541,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 256888.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 3759178.1616210938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 34153.69999999999 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3784727.3349761963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 70659.8 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 4803419.533650501,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 241086.24338624338 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.817197286760983,
            "unit": "ns/iter",
            "extra": "iterations: 55973580\ncpu: 2.497601547015574 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 7.484511855982346,
            "unit": "ns/iter",
            "extra": "iterations: 18723912\ncpu: 7.47584692771468 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 15887847.313514123,
            "unit": "ns/iter",
            "extra": "iterations: 13\ncpu: 10657684.615384616 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 203.96675918455213,
            "unit": "ns/iter",
            "extra": "iterations: 693059\ncpu: 202.28436540034832 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.625551277438785,
            "unit": "ns/iter",
            "extra": "iterations: 86154907\ncpu: 1.6243624985864125 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.05149330084091,
            "unit": "ns/iter",
            "extra": "iterations: 86205304\ncpu: 1.625591390525112 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 85.05233417310703,
            "unit": "ns/iter",
            "extra": "iterations: 1651311\ncpu: 84.63523830459555 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 329.1431927460741,
            "unit": "ns/iter",
            "extra": "iterations: 425894\ncpu: 328.749172329265 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 37.17209943646143,
            "unit": "ns/iter",
            "extra": "iterations: 3768648\ncpu: 37.14655759837479 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.232134213297535,
            "unit": "ns/iter",
            "extra": "iterations: 3766407\ncpu: 37.145321788112604 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 40.202479982709484,
            "unit": "ns/iter",
            "extra": "iterations: 3482873\ncpu: 40.188918746104164 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 20.418527737555134,
            "unit": "ns/iter",
            "extra": "iterations: 6860458\ncpu: 20.411436087794726 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 793.8724497339482,
            "unit": "ns/iter",
            "extra": "iterations: 176741\ncpu: 793.8424021590919 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 793.8075427220239,
            "unit": "ns/iter",
            "extra": "iterations: 176107\ncpu: 792.6845610907014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "defdfd2ca7b641beb4462aa0d55331938fada38c",
          "message": "Replace deprecated googletest API (#1327)",
          "timestamp": "2022-04-15T09:08:26-07:00",
          "tree_id": "9d9b03dd4cac77dd02442fb5fda4f36091b83d34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/defdfd2ca7b641beb4462aa0d55331938fada38c"
        },
        "date": 1650039806929,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 181.00626058794018,
            "unit": "ns/iter",
            "extra": "iterations: 827272\ncpu: 180.0120153951784 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 534374.7138977051,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 23375.700000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 5027205.944061279,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 225899.00000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 10728127.95639038,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 438105 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 349731.72095871775,
            "unit": "ns/iter",
            "extra": "iterations: 6193\ncpu: 23645.406103665428 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 3107009.5753809167,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 202181.57894736846 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 7698562.145233154,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 428870.00000000006 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 3.5290110461759348,
            "unit": "ns/iter",
            "extra": "iterations: 43306380\ncpu: 3.4788476894166642 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 9.268124816362253,
            "unit": "ns/iter",
            "extra": "iterations: 16590705\ncpu: 9.255899613669218 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 25107353.925704956,
            "unit": "ns/iter",
            "extra": "iterations: 8\ncpu: 12636662.5 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 279.69166529278823,
            "unit": "ns/iter",
            "extra": "iterations: 593749\ncpu: 241.74154398575828 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 2.809802713238895,
            "unit": "ns/iter",
            "extra": "iterations: 50072605\ncpu: 2.781692704024486 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 2.454379580084567,
            "unit": "ns/iter",
            "extra": "iterations: 53764886\ncpu: 2.451944192720877 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 102.24347997747599,
            "unit": "ns/iter",
            "extra": "iterations: 1358907\ncpu: 102.07711050130732 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 396.67404717727294,
            "unit": "ns/iter",
            "extra": "iterations: 344257\ncpu: 395.66660953880375 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 41.82618614186537,
            "unit": "ns/iter",
            "extra": "iterations: 3323703\ncpu: 41.768984773910304 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 41.519016566191446,
            "unit": "ns/iter",
            "extra": "iterations: 3182527\ncpu: 41.35031690226036 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 46.274074872758916,
            "unit": "ns/iter",
            "extra": "iterations: 3142819\ncpu: 46.17857407633079 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 23.70431042702521,
            "unit": "ns/iter",
            "extra": "iterations: 6402839\ncpu: 23.623130302042572 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 1054.7240205054375,
            "unit": "ns/iter",
            "extra": "iterations: 154608\ncpu: 950.7593397495601 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 2094.413174504015,
            "unit": "ns/iter",
            "extra": "iterations: 137738\ncpu: 1027.7781004515825 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e9b7a1867d3700c789fe7f39d2747df9af65a33",
          "message": "Remove redundant tail / in CMake install (#1329)",
          "timestamp": "2022-04-16T12:19:53+05:30",
          "tree_id": "b1cc7ac9bf99bff7bc287880968b9fa0ab462808",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2e9b7a1867d3700c789fe7f39d2747df9af65a33"
        },
        "date": 1650092456856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_AttributeMapHash",
            "value": 145.92200954980433,
            "unit": "ns/iter",
            "extra": "iterations: 963935\ncpu: 145.59166333829563 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/1",
            "value": 441310.4601790102,
            "unit": "ns/iter",
            "extra": "iterations: 9108\ncpu: 15783.278436539305 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/2",
            "value": 6184041.500091553,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 211016.00000000026 ns\nthreads: 1"
          },
          {
            "name": "BM_BaselineBuffer/4",
            "value": 12993695.735931396,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 457448 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/1",
            "value": 274907.18455254275,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 15224.261603375528 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/2",
            "value": 1987760.5652240685,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 155145.1612903226 ns\nthreads: 1"
          },
          {
            "name": "BM_LockFreeBuffer/4",
            "value": 8000397.682189941,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 345271.0000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdGeneration",
            "value": 2.219759631892701,
            "unit": "ns/iter",
            "extra": "iterations: 63431365\ncpu: 2.2061089178831326 ns\nthreads: 1"
          },
          {
            "name": "BM_RandomIdStdGeneration",
            "value": 6.59984671881265,
            "unit": "ns/iter",
            "extra": "iterations: 21214725\ncpu: 6.587396254252647 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseHashMap",
            "value": 12190198.89831543,
            "unit": "ns/iter",
            "extra": "iterations: 10\ncpu: 11681970.000000002 ns\nthreads: 1"
          },
          {
            "name": "BM_AttributseProcessorFilter",
            "value": 178.77515406886016,
            "unit": "ns/iter",
            "extra": "iterations: 780788\ncpu: 178.37095344703044 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerConstruction",
            "value": 1.6234795420545192,
            "unit": "ns/iter",
            "extra": "iterations: 97773556\ncpu: 1.4576865752944488 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerConstruction",
            "value": 1.4602276120405242,
            "unit": "ns/iter",
            "extra": "iterations: 98687457\ncpu: 1.430756291551823 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerConstruction",
            "value": 74.71855072032683,
            "unit": "ns/iter",
            "extra": "iterations: 1874896\ncpu: 74.4169276589208 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerConstruction",
            "value": 291.8072325058843,
            "unit": "ns/iter",
            "extra": "iterations: 484298\ncpu: 289.97724541501304 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOffSamplerShouldSample",
            "value": 42.417591345963125,
            "unit": "ns/iter",
            "extra": "iterations: 3699593\ncpu: 37.92063072883963 ns\nthreads: 1"
          },
          {
            "name": "BM_AlwaysOnSamplerShouldSample",
            "value": 37.97319309778328,
            "unit": "ns/iter",
            "extra": "iterations: 3682011\ncpu: 37.88383576257646 ns\nthreads: 1"
          },
          {
            "name": "BM_ParentBasedSamplerShouldSample",
            "value": 35.90506508256638,
            "unit": "ns/iter",
            "extra": "iterations: 3940709\ncpu: 35.54144698327125 ns\nthreads: 1"
          },
          {
            "name": "BM_TraceIdRatioBasedSamplerShouldSample",
            "value": 18.106572543721352,
            "unit": "ns/iter",
            "extra": "iterations: 7761737\ncpu: 18.051680957497016 ns\nthreads: 1"
          },
          {
            "name": "BM_SpanCreation",
            "value": 781.850245485704,
            "unit": "ns/iter",
            "extra": "iterations: 200238\ncpu: 705.9074701105686 ns\nthreads: 1"
          },
          {
            "name": "BM_NoopSpanCreation",
            "value": 702.4620277539663,
            "unit": "ns/iter",
            "extra": "iterations: 200016\ncpu: 700.8829293656512 ns\nthreads: 1"
          }
        ]
      }
    ],
    "OpenTelemetry-cpp exporters Benchmark": [
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a821fdfa5a7ef3850319483df002f42f6d8b691",
          "message": "Continuous benchmark tests as part of the CI (#1174)",
          "timestamp": "2022-01-21T10:12:39-08:00",
          "tree_id": "be73c679916ac58ef57ef857fd51e17edd33b0c8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2a821fdfa5a7ef3850319483df002f42f6d8b691"
        },
        "date": 1642789435314,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.96105513145793,
            "unit": "ns/iter",
            "extra": "iterations: 4211000\ncpu: 31.935620992638327 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 85.41997873558188,
            "unit": "ns/iter",
            "extra": "iterations: 1590000\ncpu: 85.41339622641512 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 727.9445143306957,
            "unit": "ns/iter",
            "extra": "iterations: 204000\ncpu: 727.8313725490198 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1716770.5279242373,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 367312.23241590225 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a605fd9116723cb33769dafb25a9bb88323a7674",
          "message": "importing gsl::span if std::span is not available (#1167)",
          "timestamp": "2022-01-24T19:14:20-08:00",
          "tree_id": "06217abfa84c48eaac7328bb508b450be04ab671",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a605fd9116723cb33769dafb25a9bb88323a7674"
        },
        "date": 1643081179157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.817587283307745,
            "unit": "ns/iter",
            "extra": "iterations: 4023000\ncpu: 34.799751429281635 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 96.02210827029694,
            "unit": "ns/iter",
            "extra": "iterations: 1468000\ncpu: 95.49032697547686 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 796.1067286404697,
            "unit": "ns/iter",
            "extra": "iterations: 176000\ncpu: 795.7551136363638 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1950522.3157200427,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 360248.82506527426 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16a9c53680079a7a5f6728dd4bf4938efa214b30",
          "message": "Add @esigo as approver (#1183)",
          "timestamp": "2022-01-26T08:58:05-08:00",
          "tree_id": "ce15f948274aaca62ea8d3f05725540721d025fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/16a9c53680079a7a5f6728dd4bf4938efa214b30"
        },
        "date": 1643217086792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 33.49761652752636,
            "unit": "ns/iter",
            "extra": "iterations: 4305000\ncpu: 33.498536585365855 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 82.40480551924304,
            "unit": "ns/iter",
            "extra": "iterations: 1701000\ncpu: 82.38106995884776 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 711.5954562172371,
            "unit": "ns/iter",
            "extra": "iterations: 193000\ncpu: 711.6072538860102 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2111882.7556308946,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 468960.8552631578 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hamed0381@gmail.com",
            "name": "Hamed Mansouri",
            "username": "hamedprog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a320739a46000dfedba7d7a8ba60119d2a6dc5f7",
          "message": "Update GettingStarted.rst (#1189)",
          "timestamp": "2022-02-02T13:58:45-08:00",
          "tree_id": "9a560ec05ec795317cff1ee6e6f328f6923fdf3d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a320739a46000dfedba7d7a8ba60119d2a6dc5f7"
        },
        "date": 1643839938193,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.750435537231866,
            "unit": "ns/iter",
            "extra": "iterations: 3747000\ncpu: 37.71809447558047 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.19701182623999,
            "unit": "ns/iter",
            "extra": "iterations: 1147000\ncpu: 110.32458587619881 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 953.3411227398037,
            "unit": "ns/iter",
            "extra": "iterations: 161000\ncpu: 869.8857142857142 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2673943.2594992896,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 480774.909090909 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1b4a49f9b673cbdce4b992ae8fc712e49c39c50",
          "message": "disable failing test (#1193)",
          "timestamp": "2022-02-04T11:52:45-08:00",
          "tree_id": "ed584794fbdf5a6eb267184582f6fa13e64001f2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1b4a49f9b673cbdce4b992ae8fc712e49c39c50"
        },
        "date": 1644005085372,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 26.965957211735883,
            "unit": "ns/iter",
            "extra": "iterations: 5289000\ncpu: 26.896672338816412 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 76.0925626291812,
            "unit": "ns/iter",
            "extra": "iterations: 1957000\ncpu: 75.930454777721 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 658.3209307688587,
            "unit": "ns/iter",
            "extra": "iterations: 212000\ncpu: 655.9669811320757 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2424333.3604600695,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 416226.4444444445 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b6a28df5c46810728c1eb17ca797391695628e64",
          "message": "Metrics SDK: Filtering metrics attributes (#1191)",
          "timestamp": "2022-02-04T18:46:06-08:00",
          "tree_id": "ddcd8770b365e437fd35a082e33825bf256b751f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b6a28df5c46810728c1eb17ca797391695628e64"
        },
        "date": 1644030045505,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.24541920353201,
            "unit": "ns/iter",
            "extra": "iterations: 3815000\ncpu: 37.09473132372215 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 100.9206654755513,
            "unit": "ns/iter",
            "extra": "iterations: 1466000\ncpu: 100.83942701227829 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 801.3954288081119,
            "unit": "ns/iter",
            "extra": "iterations: 152000\ncpu: 799.2953947368422 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2738745.0723087084,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 498504.70588235307 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44795b6d21738a8478d620c6f4cde6f12ea5ccac",
          "message": "Add Aggregation as part of metrics SDK. (#1178)",
          "timestamp": "2022-02-04T21:53:10-08:00",
          "tree_id": "4e8e0f917db86d65af01d12113128c0637c8e104",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/44795b6d21738a8478d620c6f4cde6f12ea5ccac"
        },
        "date": 1644041050377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.133603029344073,
            "unit": "ns/iter",
            "extra": "iterations: 4821000\ncpu: 29.054884878655887 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 79.75183214460101,
            "unit": "ns/iter",
            "extra": "iterations: 1750000\ncpu: 79.63222857142861 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 665.5607178312907,
            "unit": "ns/iter",
            "extra": "iterations: 211000\ncpu: 664.091469194313 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1727450.5271647323,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 298624.48036951496 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0",
          "message": "fix errors in SDK documentation (#1201)",
          "timestamp": "2022-02-09T12:35:54-08:00",
          "tree_id": "6f0fa081aec644ec46538fc807881e46f6abc82d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e1c85570329bb775d5294a1eb2d3f1d2b9f7e4b0"
        },
        "date": 1644439715282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 35.07031110662464,
            "unit": "ns/iter",
            "extra": "iterations: 4019000\ncpu: 35.07061458074148 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 97.4155452153454,
            "unit": "ns/iter",
            "extra": "iterations: 1460000\ncpu: 97.31308219178082 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 811.2825924837136,
            "unit": "ns/iter",
            "extra": "iterations: 158000\ncpu: 811.2854430379747 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1855195.5457593573,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 395525.40983606555 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04e3a68263a90ac0fef822fc1f87196b9c59c545",
          "message": "Sync and Async Instruments SDK (#1184)",
          "timestamp": "2022-02-09T22:27:55-08:00",
          "tree_id": "790993870b48f156a444c412c9953d597451c9e8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/04e3a68263a90ac0fef822fc1f87196b9c59c545"
        },
        "date": 1644475125462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.50732272745641,
            "unit": "ns/iter",
            "extra": "iterations: 4809000\ncpu: 29.06319401122895 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 97.47391551767,
            "unit": "ns/iter",
            "extra": "iterations: 1754000\ncpu: 79.66778791334093 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 663.6142730712891,
            "unit": "ns/iter",
            "extra": "iterations: 210000\ncpu: 662.5380952380953 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2106060.7385741104,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 359904.4345898004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4",
          "message": "Benchmark documentation (#1205)",
          "timestamp": "2022-02-11T21:23:30-08:00",
          "tree_id": "ec08c9f6ed7b2efa77f3ed004f3b8b7e0c50c6f7",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e89e5b3dd65b0e73435c12b9fdeb54f9420f4bb4"
        },
        "date": 1644644003519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 26.56598083624117,
            "unit": "ns/iter",
            "extra": "iterations: 5721000\ncpu: 25.14927460234225 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 95.8762517789515,
            "unit": "ns/iter",
            "extra": "iterations: 1968000\ncpu: 79.45 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 666.0680635280519,
            "unit": "ns/iter",
            "extra": "iterations: 211000\ncpu: 663.2933649289099 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1806545.6900737183,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 311711.11111111124 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb",
          "message": "fix ostream_log_test Mac (#1208)",
          "timestamp": "2022-02-14T13:05:25-08:00",
          "tree_id": "1c45c26c34a4c593b49c6a31c05a8d7e9bb60312",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9ed312b29ca0af1d92bbf0cf63ab8a6d88272bfb"
        },
        "date": 1644873378944,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 30.941866289862492,
            "unit": "ns/iter",
            "extra": "iterations: 4773000\ncpu: 29.080808715692438 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 80.4351872222813,
            "unit": "ns/iter",
            "extra": "iterations: 1745000\ncpu: 80.23971346704873 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 672.7320807320731,
            "unit": "ns/iter",
            "extra": "iterations: 210000\ncpu: 669.8276190476188 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1789136.2655994503,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 324086.0465116278 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15c6f33631d8cdf09b85911f35263449294d31a4",
          "message": "Update grpc to v1.43.2 to support VS2022/MSVC 19.30 and bazel 5.0 (#1207)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-02-14T20:24:58-08:00",
          "tree_id": "dff039d78807ee53fdc13748fd26ef7b48546fa8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/15c6f33631d8cdf09b85911f35263449294d31a4"
        },
        "date": 1644899780582,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.36269283486564,
            "unit": "ns/iter",
            "extra": "iterations: 4970000\ncpu: 28.094225352112677 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 80.83449163948671,
            "unit": "ns/iter",
            "extra": "iterations: 1733000\ncpu: 80.76930178880556 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 628.0211465699332,
            "unit": "ns/iter",
            "extra": "iterations: 224000\ncpu: 627.6267857142857 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1971188.8452091129,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 356822.5352112676 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ef3a623a3bedd3fded167bade625d7fa392d2b88",
          "message": "Add Aggregation Storage (#1213)",
          "timestamp": "2022-02-16T14:58:32-08:00",
          "tree_id": "6f402b660d2b4da4a41caf6a91b28f6e4601ec2e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/ef3a623a3bedd3fded167bade625d7fa392d2b88"
        },
        "date": 1645053073313,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.19280830200981,
            "unit": "ns/iter",
            "extra": "iterations: 4352000\ncpu: 32.135110294117645 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.91986782098907,
            "unit": "ns/iter",
            "extra": "iterations: 1530000\ncpu: 91.65137254901958 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 733.245392234958,
            "unit": "ns/iter",
            "extra": "iterations: 196000\ncpu: 714.4331632653061 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2160533.5724126417,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 358490.7356948229 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a9d0870bc846f79f97c81796ce70440d944aa88",
          "message": "Detect vs2022 as build environment (#1212)",
          "timestamp": "2022-02-17T08:10:19Z",
          "tree_id": "361c175d162ec52518c7ad2e0eba088e6987fb3a",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3a9d0870bc846f79f97c81796ce70440d944aa88"
        },
        "date": 1645086273716,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.52880777527089,
            "unit": "ns/iter",
            "extra": "iterations: 3654000\ncpu: 38.285495347564314 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 109.80950627581079,
            "unit": "ns/iter",
            "extra": "iterations: 1276000\ncpu: 109.7105799373041 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 865.5047855494213,
            "unit": "ns/iter",
            "extra": "iterations: 163000\ncpu: 862.1042944785277 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2759715.9907095158,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 461126.912181303 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613",
          "message": "thrift boost deps (#1224)",
          "timestamp": "2022-02-18T16:18:32-08:00",
          "tree_id": "0c67ccc931501df9f7334a59aed794f05be921a2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cf7f9e28ab6610e81a9fc2799b31bbcbef7cf613"
        },
        "date": 1645230974525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 36.226847470095734,
            "unit": "ns/iter",
            "extra": "iterations: 4124000\ncpu: 36.103394762366634 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 101.3855834107299,
            "unit": "ns/iter",
            "extra": "iterations: 1430000\ncpu: 100.91811188811191 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 812.8455190947561,
            "unit": "ns/iter",
            "extra": "iterations: 165000\ncpu: 808.3757575757576 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2741998.013067423,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 482937.5464684014 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1026ec3ffcf794d91af0459ce1c30faef154eba2",
          "message": "Run apt update before install thrift dependencies (#1225)",
          "timestamp": "2022-02-18T18:56:06-08:00",
          "tree_id": "bc4374ba9a8bb4a340c2645f23f510af35c3c534",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1026ec3ffcf794d91af0459ce1c30faef154eba2"
        },
        "date": 1645240048989,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.87628723672493,
            "unit": "ns/iter",
            "extra": "iterations: 4393000\ncpu: 31.8419075802413 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 91.55927919874004,
            "unit": "ns/iter",
            "extra": "iterations: 1530000\ncpu: 91.47568627450983 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 714.8523523349954,
            "unit": "ns/iter",
            "extra": "iterations: 198000\ncpu: 711.1297979797978 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1980191.8094304348,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 325679.70401691325 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3508d7c11c8bce76e7de1d252b97a239516be2a7",
          "message": "allow extension of the lifetime of ContextStorage. (#1214)",
          "timestamp": "2022-02-18T23:44:56-08:00",
          "tree_id": "c4a43b76bc54e2209e13167fbc7a4f6a2876d1a5",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3508d7c11c8bce76e7de1d252b97a239516be2a7"
        },
        "date": 1645257407104,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.859653635431354,
            "unit": "ns/iter",
            "extra": "iterations: 4389000\ncpu: 31.85807701070859 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.3873566700475,
            "unit": "ns/iter",
            "extra": "iterations: 1516000\ncpu: 92.38680738786277 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 708.7919447157118,
            "unit": "ns/iter",
            "extra": "iterations: 198000\ncpu: 708.7853535353532 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1507081.811172844,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 342283.55091383803 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9502339a588a11642b14d795e316bb7095c63adc",
          "message": "Ostream metric exporter (#1196)",
          "timestamp": "2022-02-19T00:23:57-08:00",
          "tree_id": "8bba508dead7ada7d1d67f23d4c40d644b9ba41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9502339a588a11642b14d795e316bb7095c63adc"
        },
        "date": 1645259734282,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.315822675905263,
            "unit": "ns/iter",
            "extra": "iterations: 4961000\ncpu: 28.257750453537593 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 81.73591125382684,
            "unit": "ns/iter",
            "extra": "iterations: 1734000\ncpu: 81.58316032295271 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 628.3124287923177,
            "unit": "ns/iter",
            "extra": "iterations: 225000\ncpu: 624.8786666666666 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1988023.0044141228,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 300708.3950617285 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9157fd474883b4d90dab2e4f5aa887a705c2ab94",
          "message": "Mock for http exporters (#1185)",
          "timestamp": "2022-02-19T02:12:02-08:00",
          "tree_id": "31e46179e76115440287b60a704b41bc2c6dc874",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/9157fd474883b4d90dab2e4f5aa887a705c2ab94"
        },
        "date": 1645266228157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.11667115279029,
            "unit": "ns/iter",
            "extra": "iterations: 4363000\ncpu: 32.0730002292001 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.23747467931449,
            "unit": "ns/iter",
            "extra": "iterations: 1508000\ncpu: 92.94515915119364 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 718.7134180313502,
            "unit": "ns/iter",
            "extra": "iterations: 195000\ncpu: 716.6133333333332 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1927379.9347226731,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 357938.9578163771 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4",
          "message": "[Metric SDK] Synchronous Instruments - Aggregation Storage(s) creation for configured views (#1219)",
          "timestamp": "2022-02-24T00:12:23-08:00",
          "tree_id": "b998be5fbaeb2cb623f5f11eba18a4c509c0d472",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c10bc36e7d7776ac74d45b5b2ca02eaf0df028b4"
        },
        "date": 1645691190041,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.464587340166265,
            "unit": "ns/iter",
            "extra": "iterations: 4221000\ncpu: 31.349348495617157 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 110.64806057296636,
            "unit": "ns/iter",
            "extra": "iterations: 1572000\ncpu: 90.46157760814252 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 696.0260457005994,
            "unit": "ns/iter",
            "extra": "iterations: 203000\ncpu: 695.3630541871926 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2699652.569001492,
            "unit": "ns/iter",
            "extra": "iterations: 269\ncpu: 473613.01115241664 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a219c80a7a3c47f479ce9d20e590e5900d0248",
          "message": "Jaeger bazel windows (#1227)",
          "timestamp": "2022-02-28T20:22:13-08:00",
          "tree_id": "7bd6be3b9e9daf38f60d24a464baa814c128ee02",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/11a219c80a7a3c47f479ce9d20e590e5900d0248"
        },
        "date": 1646109274676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.41863795689174,
            "unit": "ns/iter",
            "extra": "iterations: 4375000\ncpu: 32.15869714285714 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 131.82712174772806,
            "unit": "ns/iter",
            "extra": "iterations: 1455000\ncpu: 97.02426116838485 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 882.9106989595078,
            "unit": "ns/iter",
            "extra": "iterations: 194000\ncpu: 716.8613402061856 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1855642.446209042,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 344788.6889460154 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fe14b984a07197e5d2676d4678dcef8a9d559db",
          "message": "centos image (#1240)",
          "timestamp": "2022-03-02T02:29:47-08:00",
          "tree_id": "8f2bba36fcff0ec3cd1dd18ed8ab9f7c9f9bf5f9",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1fe14b984a07197e5d2676d4678dcef8a9d559db"
        },
        "date": 1646217775949,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.24121550284541,
            "unit": "ns/iter",
            "extra": "iterations: 4345000\ncpu: 32.20296892980438 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.88172363362467,
            "unit": "ns/iter",
            "extra": "iterations: 1503000\ncpu: 92.86733200266137 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 738.0849436709756,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 737.7731578947372 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2040351.722754684,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 361868.62745098054 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "artiom.vaskov@ibm.com",
            "name": "Artiom Vaskov",
            "username": "velemas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84394fda87e80697ee0534311021926b529c8342",
          "message": "Added s390x arch into CMake build. (#1216)",
          "timestamp": "2022-03-02T07:52:37-08:00",
          "tree_id": "e328dfc358d429ff046cb55b8f5d310864548cb6",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/84394fda87e80697ee0534311021926b529c8342"
        },
        "date": 1646237243311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 46.50735283105948,
            "unit": "ns/iter",
            "extra": "iterations: 3668000\ncpu: 37.079362050163574 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 134.5658302307129,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 103.9985 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 977.7027627696161,
            "unit": "ns/iter",
            "extra": "iterations: 161000\ncpu: 834.2130434782605 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2726014.3954054755,
            "unit": "ns/iter",
            "extra": "iterations: 266\ncpu: 483424.43609022576 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9447643+devjgm@users.noreply.github.com",
            "name": "Greg Miller",
            "username": "devjgm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "99c483c790204870aae017ab37b3cf8f2785d46b",
          "message": "chore: update prometheus to 1.0 version (#1242)",
          "timestamp": "2022-03-03T19:08:15-08:00",
          "tree_id": "4ba6a1f890b1587de222ce6f361e6f7a850f03b8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/99c483c790204870aae017ab37b3cf8f2785d46b"
        },
        "date": 1646364017327,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.20007894015624,
            "unit": "ns/iter",
            "extra": "iterations: 4357000\ncpu: 32.07567133348634 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.92509882007303,
            "unit": "ns/iter",
            "extra": "iterations: 1513000\ncpu: 92.61850627891609 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 744.4788648195915,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 737.6685863874347 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2181433.1823949656,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 354273.20441988966 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50fabb5fa09faff9f9767802fd3b9b9b440b0afa",
          "message": "dependabot for GitHub actions (#1246)",
          "timestamp": "2022-03-04T15:00:10-08:00",
          "tree_id": "ae28278c1f0c2fc60ef18d9bdf20b54ee3cef35d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/50fabb5fa09faff9f9767802fd3b9b9b440b0afa"
        },
        "date": 1646435816654,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.096344031296766,
            "unit": "ns/iter",
            "extra": "iterations: 3696000\ncpu: 36.76607142857143 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 108.61795415323247,
            "unit": "ns/iter",
            "extra": "iterations: 1323000\ncpu: 108.21957671957672 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 863.1715407738319,
            "unit": "ns/iter",
            "extra": "iterations: 156000\ncpu: 860.691025641026 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2835516.7817699816,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 505872.48062015505 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "reyang@microsoft.com",
            "name": "Reiley Yang",
            "username": "reyang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b46cd6f580a90a615accdc635e6878999521fbf5",
          "message": "Update Maintainers (#1249)",
          "timestamp": "2022-03-06T20:35:50-08:00",
          "tree_id": "965591cd0aa891d6ee4140a1b3b0ebf5cbda2be3",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b46cd6f580a90a615accdc635e6878999521fbf5"
        },
        "date": 1646628465095,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.44814350781349,
            "unit": "ns/iter",
            "extra": "iterations: 4935000\ncpu: 28.33471124620061 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 81.80605503784749,
            "unit": "ns/iter",
            "extra": "iterations: 1716000\ncpu: 81.63525641025642 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 651.5008431893808,
            "unit": "ns/iter",
            "extra": "iterations: 216000\ncpu: 648.4277777777777 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1702792.1482996286,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 296999.7461928934 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32cd04774b8e7610d89c532b8b984d1ea5c1f518",
          "message": "Bump codecov/codecov-action from 1 to 2.1.0 (#1247)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 1 to 2.1.0.\r\n- [Release notes](https://github.com/codecov/codecov-action/releases)\r\n- [Changelog](https://github.com/codecov/codecov-action/blob/master/CHANGELOG.md)\r\n- [Commits](https://github.com/codecov/codecov-action/compare/v1...v2.1.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: codecov/codecov-action\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\r\nCo-authored-by: Ehsan Saei <71217171+esigo@users.noreply.github.com>",
          "timestamp": "2022-03-07T17:16:50+01:00",
          "tree_id": "2a039464fe4b158522433cc28d990e1bde7df908",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/32cd04774b8e7610d89c532b8b984d1ea5c1f518"
        },
        "date": 1646670537808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 29.401593277274976,
            "unit": "ns/iter",
            "extra": "iterations: 4771000\ncpu: 29.035925382519387 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 89.39573675261266,
            "unit": "ns/iter",
            "extra": "iterations: 1571000\ncpu: 89.24786760025461 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 703.5001438466747,
            "unit": "ns/iter",
            "extra": "iterations: 199000\ncpu: 701.8437185929647 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1819023.2856335652,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 289581.08747044933 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cba0a2a657a154d543eb736ed448c85a2bda88f3",
          "message": "Bump actions/checkout from 2 to 3 (#1248)",
          "timestamp": "2022-03-07T17:03:30Z",
          "tree_id": "a174c8f96600184e1dc540b6d9e0cb8f1a72ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/cba0a2a657a154d543eb736ed448c85a2bda88f3"
        },
        "date": 1646673988913,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 32.08586561313967,
            "unit": "ns/iter",
            "extra": "iterations: 4366000\ncpu: 32.01491067338525 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.59853211860204,
            "unit": "ns/iter",
            "extra": "iterations: 1514000\ncpu: 92.48110964332894 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 756.9827531513415,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 737.3226315789475 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2009039.1789201621,
            "unit": "ns/iter",
            "extra": "iterations: 451\ncpu: 338232.15077605325 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owentou@tencent.com",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c96a3e32f0b5bf17e58b1300383f9f205f33558f",
          "message": "Reorder the destructor of members in LoggerProvider and TracerProvider (#1245)",
          "timestamp": "2022-03-08T10:17:02-08:00",
          "tree_id": "18800f0b76f00683569a119ae88fdff4bd9c013f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c96a3e32f0b5bf17e58b1300383f9f205f33558f"
        },
        "date": 1646764222301,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 27.655851322467626,
            "unit": "ns/iter",
            "extra": "iterations: 5081000\ncpu: 27.59972446368825 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 107.01546818494644,
            "unit": "ns/iter",
            "extra": "iterations: 1563000\ncpu: 90.22322456813819 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 832.6398915257947,
            "unit": "ns/iter",
            "extra": "iterations: 203000\ncpu: 692.0620689655174 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2079435.5013533705,
            "unit": "ns/iter",
            "extra": "iterations: 599\ncpu: 327291.8196994992 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dj@gregor.com",
            "name": "DJ Gregor",
            "username": "deejgregor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd5a6218bde5a728019f377a67f75c7b821f76c7",
          "message": "Add support for span links to Jaeger export. (#1251)",
          "timestamp": "2022-03-09T09:35:09-08:00",
          "tree_id": "a2ab79068f3d318617bcedeed45d64c2082b8f90",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd5a6218bde5a728019f377a67f75c7b821f76c7"
        },
        "date": 1646848038369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.515240910945376,
            "unit": "ns/iter",
            "extra": "iterations: 4439000\ncpu: 31.47521964406398 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.17445596587223,
            "unit": "ns/iter",
            "extra": "iterations: 1505000\ncpu: 93.00385382059801 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 736.9304958142733,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 736.0489473684214 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2023062.895779586,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 352197.0149253732 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wangxiaolin374@gmail.com",
            "name": "wxl374",
            "username": "wxl374"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a7200b3658517c80412e0c7edfd15208873cf47",
          "message": "fix: use CURLOPT_TIMEOUT_MS to config OtlpHttpExporter's timeout instead of CURLOPT_TIMEOUT (#1261)",
          "timestamp": "2022-03-11T19:43:43+01:00",
          "tree_id": "d90ecfa46f3612ac5bb37c7beb11d1c5b4abb99e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/4a7200b3658517c80412e0c7edfd15208873cf47"
        },
        "date": 1647025063767,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.77064681408047,
            "unit": "ns/iter",
            "extra": "iterations: 4434000\ncpu: 31.564907532701856 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.77419538687397,
            "unit": "ns/iter",
            "extra": "iterations: 1510000\ncpu: 92.61344370860925 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 740.7903671264648,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 738.6442105263156 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1637649.807063016,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 320030.11363636376 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "28bd6215522ef82eca8c3138a2f369ad5e122243",
          "message": "Asynchronous Aggregation storage (#1232)",
          "timestamp": "2022-03-11T22:36:10Z",
          "tree_id": "90032e5cc1c11b63572bf8dc9232bdf94176867e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/28bd6215522ef82eca8c3138a2f369ad5e122243"
        },
        "date": 1647039155346,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 40.516751478601535,
            "unit": "ns/iter",
            "extra": "iterations: 3558000\ncpu: 40.4549184935357 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 112.05494403839111,
            "unit": "ns/iter",
            "extra": "iterations: 1200000\ncpu: 111.78058333333334 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 889.5989436252861,
            "unit": "ns/iter",
            "extra": "iterations: 157000\ncpu: 889.1471337579618 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 3281692.2223126446,
            "unit": "ns/iter",
            "extra": "iterations: 270\ncpu: 578226.6666666669 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da94697c017aaff539c4ec39c06abf09ae67bae6",
          "message": "AttributesProcessor dtor (#1263)",
          "timestamp": "2022-03-13T09:39:41-07:00",
          "tree_id": "dd37e98794badc023784ece3a4dbb8ec3dbb39d8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da94697c017aaff539c4ec39c06abf09ae67bae6"
        },
        "date": 1647190487201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.45278529773693,
            "unit": "ns/iter",
            "extra": "iterations: 3791000\ncpu: 37.40487997889739 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 107.9285322730221,
            "unit": "ns/iter",
            "extra": "iterations: 1340000\ncpu: 104.41880597014928 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 820.8985962619671,
            "unit": "ns/iter",
            "extra": "iterations: 173000\ncpu: 819.2098265895958 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1990139.4844055176,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 399043.2432432433 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "49648bd8f741a28a2b111c8d8ecad75a070ea649",
          "message": "Remove nostd::span as dependency from Dependency document (#1260)",
          "timestamp": "2022-03-13T13:19:09-07:00",
          "tree_id": "d98354c87d76ae368a9bc8c2089235ace5df9bf2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/49648bd8f741a28a2b111c8d8ecad75a070ea649"
        },
        "date": 1647203447578,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.139236392419907,
            "unit": "ns/iter",
            "extra": "iterations: 5018000\ncpu: 27.897130330809095 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 82.18151302964475,
            "unit": "ns/iter",
            "extra": "iterations: 1704000\ncpu: 82.13920187793427 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 652.9386653456577,
            "unit": "ns/iter",
            "extra": "iterations: 215000\ncpu: 652.8734883720931 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2010835.7136383718,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 363358.8744588745 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b1a74c7abd3375ef459b28f6b3536a42cf9e71a",
          "message": "Enable line-length lint for markdown docs (#1268)",
          "timestamp": "2022-03-16T07:17:12-07:00",
          "tree_id": "c63c50aa237422d2259c610614e4461ba2d6f3ef",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0b1a74c7abd3375ef459b28f6b3536a42cf9e71a"
        },
        "date": 1647441246076,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.757096346357546,
            "unit": "ns/iter",
            "extra": "iterations: 4429000\ncpu: 31.567577331226012 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.05486628484347,
            "unit": "ns/iter",
            "extra": "iterations: 1508000\ncpu: 92.7838859416446 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 746.0760691809276,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 741.4555555555554 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2069727.4919372895,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 367809.6685082875 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6bd2f963096cb242a119bdef52a885492a63e552",
          "message": "MetricStorage dtors (#1270)",
          "timestamp": "2022-03-17T17:10:32-07:00",
          "tree_id": "11e2680e64e0635b24e53ef1b3f094f3ad723c66",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6bd2f963096cb242a119bdef52a885492a63e552"
        },
        "date": 1647562960855,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.633546836959614,
            "unit": "ns/iter",
            "extra": "iterations: 4438000\ncpu: 31.515570076611088 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.22451784255657,
            "unit": "ns/iter",
            "extra": "iterations: 1504000\ncpu: 93.14567819148938 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 739.3686394942434,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 737.3678947368418 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1975199.955376197,
            "unit": "ns/iter",
            "extra": "iterations: 421\ncpu: 301262.4703087886 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31d888a540c00e03fd430c724a15420ef3281e78",
          "message": "Enable metric collection from MetricReader (#1241)",
          "timestamp": "2022-03-17T18:15:35-07:00",
          "tree_id": "1fe56a5fd8cec65eab979e5fd25a9866de69ef4d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/31d888a540c00e03fd430c724a15420ef3281e78"
        },
        "date": 1647566996690,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 39.41186562726853,
            "unit": "ns/iter",
            "extra": "iterations: 3573000\ncpu: 37.95239294710328 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.73030546760407,
            "unit": "ns/iter",
            "extra": "iterations: 1257000\ncpu: 111.45186953062849 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 891.3897260834899,
            "unit": "ns/iter",
            "extra": "iterations: 158000\ncpu: 889.0943037974686 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2255033.4811582,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 405115.57632398733 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e072daa229f72431b1c50986645d51180a586d09",
          "message": "install sdk config (#1273)",
          "timestamp": "2022-03-21T07:02:15-07:00",
          "tree_id": "24a560af6e4e7707f903df3142496e8ce3d3f8b1",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e072daa229f72431b1c50986645d51180a586d09"
        },
        "date": 1647872329023,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 39.174278237541174,
            "unit": "ns/iter",
            "extra": "iterations: 3510000\ncpu: 39.10903133903134 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 108.12120004133745,
            "unit": "ns/iter",
            "extra": "iterations: 1320000\ncpu: 107.93128787878788 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 892.3871607720098,
            "unit": "ns/iter",
            "extra": "iterations: 158000\ncpu: 890.717088607595 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 3157346.676557492,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 474386.813186813 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ec1b596fde0a2d443f5d730bcd14384b68c68e9",
          "message": "Bump actions/cache from 2 to 3 (#1277)",
          "timestamp": "2022-03-22T18:27:20+01:00",
          "tree_id": "9bdf4515d8c5ba0079d9d0f961a26912f59a5b4f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6ec1b596fde0a2d443f5d730bcd14384b68c68e9"
        },
        "date": 1647971690470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 35.199227512233556,
            "unit": "ns/iter",
            "extra": "iterations: 4418000\ncpu: 31.555681303757357 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.88397043332783,
            "unit": "ns/iter",
            "extra": "iterations: 1513000\ncpu: 92.66060806345011 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 743.0649308300523,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 742.162433862434 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1749998.8318135745,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 324549.051490515 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b",
          "message": " Add owent as an Approver (#1276)\n\n* add owent as reviewer\r\n\r\n* fix order",
          "timestamp": "2022-03-23T08:06:46-07:00",
          "tree_id": "87d7621ac28ba57d5748930eb19560dd42849fbf",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/b5155a5dea3a8816d1d0aa3f513d6a5c13245d9b"
        },
        "date": 1648048979958,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 39.02323834307782,
            "unit": "ns/iter",
            "extra": "iterations: 3619000\ncpu: 38.91594363083725 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 108.56789133685027,
            "unit": "ns/iter",
            "extra": "iterations: 1347000\ncpu: 108.2985152190052 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 876.0705590248108,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 873.1625000000004 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2754920.3448121333,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 512925.9136212625 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c9aecea7af2f3f835f79397feb1436f8d51cc25",
          "message": "Disable benchmark action failure (#1284)",
          "timestamp": "2022-03-24T16:45:38+01:00",
          "tree_id": "a113fc6f58ec10b3a7dbd69d14b5baa94e19f8ad",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/0c9aecea7af2f3f835f79397feb1436f8d51cc25"
        },
        "date": 1648139277964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.63815082019585,
            "unit": "ns/iter",
            "extra": "iterations: 4437000\ncpu: 31.537457741717382 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 94.00305086678833,
            "unit": "ns/iter",
            "extra": "iterations: 1507000\ncpu: 92.98175182481752 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 741.775704439355,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 740.0841269841267 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2095923.4113170335,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 348439.1644908614 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c7b44bf4f7a615364b78d4449eaa5f7ac121249",
          "message": "metrics exemplar round 1 (#1264)",
          "timestamp": "2022-03-24T22:31:41+01:00",
          "tree_id": "c5847c4090ac2472cf9eb12e045cce3e0ff2af9e",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3c7b44bf4f7a615364b78d4449eaa5f7ac121249"
        },
        "date": 1648158637258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.12209528864484,
            "unit": "ns/iter",
            "extra": "iterations: 3844000\ncpu: 36.97159209157129 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 105.40998348429682,
            "unit": "ns/iter",
            "extra": "iterations: 1399000\ncpu: 104.80278770550392 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 825.93324572541,
            "unit": "ns/iter",
            "extra": "iterations: 172000\ncpu: 825.2093023255817 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2666046.6772526745,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 483448.51752021577 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2c9ce393e0582a4e0559a73bd9a572cf324b7086",
          "message": "[Metrics SDK] - fix spelling (AggregationTemporarily to AggregationTemporality) (#1288)",
          "timestamp": "2022-03-24T16:47:49-07:00",
          "tree_id": "f4ae6ba4c2894ee8851934ef8f8120e7564a31fc",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2c9ce393e0582a4e0559a73bd9a572cf324b7086"
        },
        "date": 1648166459043,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.543459824628858,
            "unit": "ns/iter",
            "extra": "iterations: 4441000\ncpu: 31.44197252870976 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 97.88355935558936,
            "unit": "ns/iter",
            "extra": "iterations: 1498000\ncpu: 93.55740987983981 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 740.5921032554224,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 739.8610526315795 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1406222.2345169885,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 323258.5081585082 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91b05720ef38bcd065e1ebb8c9c857764d8d0e3b",
          "message": "fix compilation error with protobuf 3.5 (#1289)",
          "timestamp": "2022-03-25T17:40:21+01:00",
          "tree_id": "c875ed27837cc5d253823727efbff74ccac4ba16",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/91b05720ef38bcd065e1ebb8c9c857764d8d0e3b"
        },
        "date": 1648227343382,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 27.379194895426433,
            "unit": "ns/iter",
            "extra": "iterations: 5100000\ncpu: 27.358764705882354 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 89.37705094647255,
            "unit": "ns/iter",
            "extra": "iterations: 1570000\ncpu: 88.98305732484074 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 685.6357350068934,
            "unit": "ns/iter",
            "extra": "iterations: 204000\ncpu: 685.2372549019609 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1840210.4525221991,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 277014.22680412367 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c1b959079bd6ae03183f54f246017aa1be5c706b",
          "message": "Fix span SetAttribute crash (#1283)",
          "timestamp": "2022-03-26T08:25:42Z",
          "tree_id": "13862d3814fa9d6f4edac4cef175701f1d00d248",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/c1b959079bd6ae03183f54f246017aa1be5c706b"
        },
        "date": 1648284038214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 47.813597067904716,
            "unit": "ns/iter",
            "extra": "iterations: 4066000\ncpu: 35.32361042793901 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 101.4854907989502,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 101.36770000000003 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 986.0329374053774,
            "unit": "ns/iter",
            "extra": "iterations: 169000\ncpu: 834.6775147928996 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2154395.5669722743,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 387483.79888268164 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7e814a632fdaee0c76246358ffad811ac06a7e9",
          "message": "Synchronous Metric collection (Delta , Cumulative) (#1265)",
          "timestamp": "2022-03-30T01:01:37Z",
          "tree_id": "c0d9fb9e062e573ec2d6d2d5369689eaed72408c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/a7e814a632fdaee0c76246358ffad811ac06a7e9"
        },
        "date": 1648602950788,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 48.8825382724885,
            "unit": "ns/iter",
            "extra": "iterations: 3720000\ncpu: 35.94483870967742 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 146.74619877294742,
            "unit": "ns/iter",
            "extra": "iterations: 1365000\ncpu: 103.9319413919414 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 1090.142164337501,
            "unit": "ns/iter",
            "extra": "iterations: 178000\ncpu: 829.188202247191 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2581939.6351370052,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 479193.48534201965 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76c664a20b8219b91ead69ded6b7ee873b1a85ba",
          "message": "Rename `http_client_curl` to `opentelemetry_http_client_curl` (#1301)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-03-31T11:51:26-07:00",
          "tree_id": "e2f6346906aa6f84e0ce077d65078685ead26980",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/76c664a20b8219b91ead69ded6b7ee873b1a85ba"
        },
        "date": 1648753565875,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 33.50035699801899,
            "unit": "ns/iter",
            "extra": "iterations: 4447000\ncpu: 32.65963570946706 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 88.97483348846436,
            "unit": "ns/iter",
            "extra": "iterations: 1472000\ncpu: 88.8048913043478 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 722.8585064108602,
            "unit": "ns/iter",
            "extra": "iterations: 197000\ncpu: 710.0416243654826 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2166639.617148866,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 424003.1914893618 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2034c9bcfa9cf6a995891efed36264088a333d37",
          "message": "Don't show coverage annotation for pull requests (#1304)",
          "timestamp": "2022-04-01T19:57:31+02:00",
          "tree_id": "472a4abf8828b68d3ea17a4767b6eb152308f526",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2034c9bcfa9cf6a995891efed36264088a333d37"
        },
        "date": 1648836574359,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.491639268602153,
            "unit": "ns/iter",
            "extra": "iterations: 4444000\ncpu: 31.46417641764177 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.50719607112588,
            "unit": "ns/iter",
            "extra": "iterations: 1514000\ncpu: 92.4763540290621 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 738.3120687384354,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 737.4921052631578 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2223599.0529405526,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 367559.5174262736 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33d9c628f2e7029b6b92733df69336f7e384c7e4",
          "message": "Implement periodic exporting metric reader (#1286)",
          "timestamp": "2022-04-01T14:07:44-07:00",
          "tree_id": "08bc3c6b0d5e345e481dfc903e1c4ae1147d2c38",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/33d9c628f2e7029b6b92733df69336f7e384c7e4"
        },
        "date": 1648848049882,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.50700178866725,
            "unit": "ns/iter",
            "extra": "iterations: 4435000\ncpu: 31.482998872604284 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 94.5381289081205,
            "unit": "ns/iter",
            "extra": "iterations: 1501000\ncpu: 93.77248500999333 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 741.5809129413806,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 740.6978947368422 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1845356.463050308,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 349619.3277310926 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "48a40601061905542a52dd11109a868517a6e304",
          "message": "Add `async-changes` branch to pull_request of github action (#1309)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-04T13:09:48-07:00",
          "tree_id": "7e11595736b57f690103f0f4a25827ef3145b41f",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/48a40601061905542a52dd11109a868517a6e304"
        },
        "date": 1649103724320,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.61775580358721,
            "unit": "ns/iter",
            "extra": "iterations: 4420000\ncpu: 31.615045248868785 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.5931779365086,
            "unit": "ns/iter",
            "extra": "iterations: 1514000\ncpu: 92.58916776750328 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 735.2729118307224,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 735.2000000000005 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1457066.8192193059,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 337867.821782178 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be75bbc862a81319f8f9cae11c14f79f2c776aa9",
          "message": "Add InstrumentationInfo and Resource to the metrics data to be exported. (#1299)",
          "timestamp": "2022-04-04T22:09:02Z",
          "tree_id": "83c28eccef1b5a9839523c88c9f1175c1d2d7cc2",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/be75bbc862a81319f8f9cae11c14f79f2c776aa9"
        },
        "date": 1649110812683,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 27.970834211869672,
            "unit": "ns/iter",
            "extra": "iterations: 4994000\ncpu: 27.96984381257509 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 83.27537396091545,
            "unit": "ns/iter",
            "extra": "iterations: 1683000\ncpu: 83.16221033868095 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 652.0426550576854,
            "unit": "ns/iter",
            "extra": "iterations: 215000\ncpu: 652.0390697674419 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1362433.3372019758,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 312339.64646464656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "237a0b26372b8a75ae941272b78bc07f12692c7b",
          "message": "Excempt should be applied on issue instead of PR (#1316)",
          "timestamp": "2022-04-04T20:41:02-07:00",
          "tree_id": "2d6d0e656fc5dfad523d31bfef3949ed51344b5b",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/237a0b26372b8a75ae941272b78bc07f12692c7b"
        },
        "date": 1649130880947,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.827435177240176,
            "unit": "ns/iter",
            "extra": "iterations: 4207000\ncpu: 31.757214166864745 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 88.75039907602164,
            "unit": "ns/iter",
            "extra": "iterations: 1430000\ncpu: 88.70279720279719 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 777.7162220167077,
            "unit": "ns/iter",
            "extra": "iterations: 184000\ncpu: 776.4831521739135 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2611229.9820909468,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 486053.82059800683 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fd338cc9f96cd2ad2af7b3bed496c10c22098582",
          "message": "Bump codecov/codecov-action from 2.1.0 to 3 (#1318)",
          "timestamp": "2022-04-05T23:05:14-07:00",
          "tree_id": "259c56f90bbd7d91b82098b8fd1c20ac74aa0074",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/fd338cc9f96cd2ad2af7b3bed496c10c22098582"
        },
        "date": 1649225799698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.767317848484012,
            "unit": "ns/iter",
            "extra": "iterations: 4384000\ncpu: 31.695597627737225 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.20311723871434,
            "unit": "ns/iter",
            "extra": "iterations: 1504000\ncpu: 93.11868351063832 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 740.9525167255501,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 736.6848167539268 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1803362.2223653912,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 328680 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "74ec691e4a73c3160f2bb2aaf0a9626fb282beec",
          "message": "Move public definitions into `opentelemetry_api`. (#1314)\n\nSigned-off-by: owent <admin@owent.net>",
          "timestamp": "2022-04-06T23:06:59-07:00",
          "tree_id": "7bc735649612f995f158ea1b471f1b41e41e9667",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/74ec691e4a73c3160f2bb2aaf0a9626fb282beec"
        },
        "date": 1649312327686,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.57985458098345,
            "unit": "ns/iter",
            "extra": "iterations: 4428000\ncpu: 31.560478771454374 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.92743566497883,
            "unit": "ns/iter",
            "extra": "iterations: 1508000\ncpu: 92.84807692307692 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 740.0449953581158,
            "unit": "ns/iter",
            "extra": "iterations: 190000\ncpu: 738.9057894736844 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1808343.5385974485,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 286455.59701492544 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "admin@owent.net",
            "name": "WenTao Ou",
            "username": "owent"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b87300b5a354cf377f164eecd914e80171a69e6",
          "message": "Add building test without RTTI (#1294)",
          "timestamp": "2022-04-07T08:56:44-07:00",
          "tree_id": "52e8a0059af0fce5645e312e7435d156a955ccf8",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/6b87300b5a354cf377f164eecd914e80171a69e6"
        },
        "date": 1649347875280,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 35.07732572350318,
            "unit": "ns/iter",
            "extra": "iterations: 3857000\ncpu: 34.90352605652062 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 105.95664833531235,
            "unit": "ns/iter",
            "extra": "iterations: 1320000\ncpu: 105.57265151515152 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 872.8877607598362,
            "unit": "ns/iter",
            "extra": "iterations: 166000\ncpu: 845.0560240963855 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2485380.6964234808,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 409679.1907514451 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71329856+benlandrum@users.noreply.github.com",
            "name": "Ben Landrum",
            "username": "benlandrum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3122254e8238738d74f78130817b090a8fdc0a9a",
          "message": "Remove implicitly deleted default constructor (#1267)\n\nCo-authored-by: Tom Tan <Tom.Tan@microsoft.com>\r\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-07T10:02:11-07:00",
          "tree_id": "46ac29c32e449bf28f39f4ff841d32efae30ce24",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/3122254e8238738d74f78130817b090a8fdc0a9a"
        },
        "date": 1649351806772,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.16839990297349,
            "unit": "ns/iter",
            "extra": "iterations: 3683000\ncpu: 38.04322563127885 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.77233965748334,
            "unit": "ns/iter",
            "extra": "iterations: 1255000\ncpu: 111.57976095617532 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 890.8577685086233,
            "unit": "ns/iter",
            "extra": "iterations: 159000\ncpu: 884.9584905660378 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2418572.4556446075,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 436052.5000000001 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d72dcb69b07ffe773e490ee797126357480b9cb0",
          "message": "[ETW Exporter] - ETW provider handle cleanup (#1322)",
          "timestamp": "2022-04-11T00:45:36-07:00",
          "tree_id": "75feeddd4fd22f74bedd9796d4dfee51734f4a4c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/d72dcb69b07ffe773e490ee797126357480b9cb0"
        },
        "date": 1649663865463,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.840346902338432,
            "unit": "ns/iter",
            "extra": "iterations: 4408000\ncpu: 31.7641333938294 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.44340482606323,
            "unit": "ns/iter",
            "extra": "iterations: 1501000\ncpu: 93.27768154563623 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 747.8850228445871,
            "unit": "ns/iter",
            "extra": "iterations: 189000\ncpu: 743.631216931217 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2176853.230125026,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 370566.84210526326 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e200c1f183ab1340448b0992e96054f5aa591f46",
          "message": "Bump actions/stale from 4 to 5 (#1323)",
          "timestamp": "2022-04-11T07:55:15-07:00",
          "tree_id": "7dcecc3fc7868dd3e9f82b71a8f69effcbfbb23d",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e200c1f183ab1340448b0992e96054f5aa591f46"
        },
        "date": 1649689753363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.0784273147583,
            "unit": "ns/iter",
            "extra": "iterations: 3680000\ncpu: 38.03663043478261 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.37767512771777,
            "unit": "ns/iter",
            "extra": "iterations: 1258000\ncpu: 111.1816375198728 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 887.4824212032294,
            "unit": "ns/iter",
            "extra": "iterations: 159000\ncpu: 885.8622641509436 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1972856.975737072,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 390870.8333333334 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "755f109a0d44f277da33145af1e285da624b3fd8",
          "message": "ostream metrics example (#1312)",
          "timestamp": "2022-04-12T11:12:21-07:00",
          "tree_id": "b2e577139c4acaf1d5091a2992e92267b856bb46",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/755f109a0d44f277da33145af1e285da624b3fd8"
        },
        "date": 1649787957632,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 38.126796281256645,
            "unit": "ns/iter",
            "extra": "iterations: 3675000\ncpu: 38.0493605442177 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 111.93432642458365,
            "unit": "ns/iter",
            "extra": "iterations: 1268000\ncpu: 111.76813880126183 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 894.8793951070534,
            "unit": "ns/iter",
            "extra": "iterations: 159000\ncpu: 881.1962264150945 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2362194.6950502032,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 402694.3037974681 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da2911cf4458c7068f967c17c65d07eeba449a08",
          "message": "Prepare v1.3.0 release (#1324)",
          "timestamp": "2022-04-12T12:46:07-07:00",
          "tree_id": "c6220ed40da1d737bd27e307c20025ace70dee7c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/da2911cf4458c7068f967c17c65d07eeba449a08"
        },
        "date": 1649793484637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 33.119035609678505,
            "unit": "ns/iter",
            "extra": "iterations: 4273000\ncpu: 31.76725953662532 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.53894174735485,
            "unit": "ns/iter",
            "extra": "iterations: 1517000\ncpu: 92.37804878048783 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 742.4991168276802,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 735.4638743455502 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1978786.3372877715,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 326630.9582309583 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75c2a8f7a6bf81d9799e76804473609cc236b7be",
          "message": "Update yield logic for ARM processor (#1325)",
          "timestamp": "2022-04-12T14:33:39-07:00",
          "tree_id": "c26515fdd5b5debb2af48f98dd0d92d81ceded34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/75c2a8f7a6bf81d9799e76804473609cc236b7be"
        },
        "date": 1649799942547,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.722037465494054,
            "unit": "ns/iter",
            "extra": "iterations: 4415000\ncpu: 31.67392978482447 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.63699466624159,
            "unit": "ns/iter",
            "extra": "iterations: 1504000\ncpu: 93.12699468085107 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 736.3539091579577,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 734.944502617801 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1773641.9554679624,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 332937.2208436726 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67091862+juandemanjon@users.noreply.github.com",
            "name": "jmanjon",
            "username": "juandemanjon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7f051edf72c6b162ba27fe624d2a6a05e2210d6",
          "message": "Fix for #1292 (#1326)",
          "timestamp": "2022-04-14T09:51:47+05:30",
          "tree_id": "f9d4980e62b4f95b38ab8db49781e7157f1d219c",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e7f051edf72c6b162ba27fe624d2a6a05e2210d6"
        },
        "date": 1649910945964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 37.82496793950101,
            "unit": "ns/iter",
            "extra": "iterations: 3671000\ncpu: 37.700817216017434 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 110.67945430510967,
            "unit": "ns/iter",
            "extra": "iterations: 1263000\ncpu: 110.51211401425181 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 880.5528283119202,
            "unit": "ns/iter",
            "extra": "iterations: 160000\ncpu: 875.2006250000004 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2139606.104268656,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 383830.9090909092 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lalit_fin@yahoo.com",
            "name": "Lalit Kumar Bhasin",
            "username": "lalitb"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "29d68f1146e0082bf774685a41ad201883461d88",
          "message": "Implement Merge and Diff operation for Histogram Aggregation (#1303)",
          "timestamp": "2022-04-14T09:53:09-07:00",
          "tree_id": "c985975fc50fb1812e9f85d0c610c8e896136da4",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/29d68f1146e0082bf774685a41ad201883461d88"
        },
        "date": 1649955954737,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.72361615617052,
            "unit": "ns/iter",
            "extra": "iterations: 4411000\ncpu: 31.701178871004306 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.57686484143099,
            "unit": "ns/iter",
            "extra": "iterations: 1516000\ncpu: 92.43482849604221 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 739.8440575724497,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 735.9806282722511 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1766982.9969984875,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 325374.4063324537 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3304d7897fe72f628da5a567166970b103e17b6",
          "message": "fix metrics compiler warnings (#1328)",
          "timestamp": "2022-04-15T12:50:47+05:30",
          "tree_id": "6b8621d7f00361094390222c31b3fde0c93b8d95",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/e3304d7897fe72f628da5a567166970b103e17b6"
        },
        "date": 1650007961435,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.638129297404184,
            "unit": "ns/iter",
            "extra": "iterations: 4429000\ncpu: 31.62433958004064 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 92.4769995394986,
            "unit": "ns/iter",
            "extra": "iterations: 1516000\ncpu: 92.37598944591034 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 733.3469887574514,
            "unit": "ns/iter",
            "extra": "iterations: 192000\ncpu: 732.8046874999997 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2203566.7823217707,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 370298.88579387194 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "defdfd2ca7b641beb4462aa0d55331938fada38c",
          "message": "Replace deprecated googletest API (#1327)",
          "timestamp": "2022-04-15T09:08:26-07:00",
          "tree_id": "9d9b03dd4cac77dd02442fb5fda4f36091b83d34",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/defdfd2ca7b641beb4462aa0d55331938fada38c"
        },
        "date": 1650039806606,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 34.437118268740896,
            "unit": "ns/iter",
            "extra": "iterations: 3734000\ncpu: 34.437279057311194 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 96.08213675765462,
            "unit": "ns/iter",
            "extra": "iterations: 1299000\ncpu: 96.07590454195534 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 778.1576324295212,
            "unit": "ns/iter",
            "extra": "iterations: 182000\ncpu: 777.2879120879121 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2048417.141563014,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 493982.8947368423 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Tom.Tan@microsoft.com",
            "name": "Tom Tan",
            "username": "ThomsonTan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e9b7a1867d3700c789fe7f39d2747df9af65a33",
          "message": "Remove redundant tail / in CMake install (#1329)",
          "timestamp": "2022-04-16T12:19:53+05:30",
          "tree_id": "b1cc7ac9bf99bff7bc287880968b9fa0ab462808",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/2e9b7a1867d3700c789fe7f39d2747df9af65a33"
        },
        "date": 1650092456976,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 28.24145048299178,
            "unit": "ns/iter",
            "extra": "iterations: 4971000\ncpu: 28.080064373365527 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 83.24154143063527,
            "unit": "ns/iter",
            "extra": "iterations: 1696000\ncpu: 82.80070754716981 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 661.225230605514,
            "unit": "ns/iter",
            "extra": "iterations: 216000\ncpu: 652.3976851851853 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 1695541.6946584922,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 305281.776765376 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71217171+esigo@users.noreply.github.com",
            "name": "Ehsan Saei",
            "username": "esigo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d2cd4225da38cb8e7e95bb5c8e33b614555c0d1",
          "message": "dependencies image as artifact (#1333)\n\nCo-authored-by: Lalit Kumar Bhasin <lalit_fin@yahoo.com>",
          "timestamp": "2022-04-18T15:39:02Z",
          "tree_id": "02df9e236eb77254ac8cf3ad6d71f5ec3243ce87",
          "url": "https://github.com/open-telemetry/opentelemetry-cpp/commit/1d2cd4225da38cb8e7e95bb5c8e33b614555c0d1"
        },
        "date": 1650297060024,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_OtlpExporterEmptySpans",
            "value": 31.744285386808855,
            "unit": "ns/iter",
            "extra": "iterations: 4422000\ncpu: 31.64843962008141 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterSparseSpans",
            "value": 93.13011043369573,
            "unit": "ns/iter",
            "extra": "iterations: 1513000\ncpu: 92.63992068737609 ns\nthreads: 1"
          },
          {
            "name": "BM_OtlpExporterDenseSpans",
            "value": 736.4812321687868,
            "unit": "ns/iter",
            "extra": "iterations: 191000\ncpu: 735.3785340314137 ns\nthreads: 1"
          },
          {
            "name": "BM_otlp_grpc_with_collector",
            "value": 2211378.4457422406,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 364318.5286103543 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}