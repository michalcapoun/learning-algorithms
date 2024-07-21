const msgPayload = [
  { name: "LCD_Tester/1" },
  { name: "LCD_Tester/2" },
  { name: "LCD_Tester/3" },
  { name: "LCD_Tester/5" },
  { name: "LCD_Tester/6" },
  { name: "accmotors_tester/1" },
  { name: "accmotors_tester/2" },
  { name: "afs_man_control/1" },
  { name: "buddy_tester/1" },
  { name: "buddy_tester/2" },
  { name: "buddy_tester/3" },
  { name: "cable-tester/1" },
  { name: "cable-tester/2" },
  { name: "cable-tester/3" },
  { name: "cable-tester/4" },
  { name: "display_transmission/1" },
  { name: "einsy2_tester/1" },
  { name: "einsy2_tester/2" },
  { name: "einsy2_tester/3" },
  { name: "encl_basic_tester/1" },
  { name: "encl_bl_tester/1" },
  { name: "encl_led_tester/1" },
  { name: "fan_tester/1" },
  { name: "fan_tester/2" },
  { name: "fan_tester/3" },
  { name: "fan_tester/4" },
  { name: "fan_tester/5" },
  { name: "fdm/F-senzor_test" },
  { name: "hall_tester/1" },
  { name: "hall_tester/2" },
  { name: "hall_tester/3" },
  { name: "hall_tester/4" },
  { name: "hb-mini/1" },
  { name: "hb-mini/2" },
  { name: "hb-mini/3" },
  { name: "hb-mini/4" },
  { name: "hb-mini/5" },
  { name: "hb-mini/6" },
  { name: "hb-mk3/1" },
  { name: "hb-mk3/2" },
  { name: "hb-mk3/3" },
  { name: "hb-mk3/4" },
  { name: "hb-mk3/5" },
  { name: "hb-mk3/6" },
  { name: "he-mini-test/1" },
  { name: "he-mini-test/2" },
  { name: "he-mk3-test/1" },
  { name: "he-mk3-test/2" },
  { name: "he-mk3-test/3" },
  { name: "he_tester/1" },
  { name: "he_tester/2" },
  { name: "he_tester/3" },
  { name: "he_tester/4" },
  { name: "inda_tester/1" },
  { name: "inda_tester/2" },
  { name: "inda_tester/3" },
  { name: "inda_tester/4" },
  { name: "ledmodule-s/1" },
  { name: "loadcell_tester/2" },
  { name: "loadcell_tester/3" },
  { name: "loveboard_tester/1" },
  { name: "loveboard_tester/2" },
  { name: "loveboard_tester/3" },
  { name: "mini-tower-tester/1_1" },
  { name: "mini-tower-tester/1_2" },
  { name: "mini-tower-tester/1_3" },
  { name: "mini-tower-tester/2_1" },
  { name: "mini-tower-tester/2_2" },
  { name: "mini-tower-tester/2_3" },
  { name: "mmu2_tester/1" },
  { name: "mmu2_tester/2" },
  { name: "mmu2_tester/3" },
  { name: "mmu_addon_tester/1" },
  { name: "pg_tester/1" },
  { name: "pg_tester/2" },
  { name: "pg_tester/3" },
  { name: "pg_tester/4" },
  { name: "pg_tester/5" },
  { name: "pg_tester/6" },
  { name: "pg_tester/7" },
  { name: "pg_tester/8" },
  { name: "pg_tester/9" },
  { name: "self_tester/1" },
  { name: "sl1/CoverCheck_checker" },
  { name: "sl1/ThermoTest" },
  { name: "sl1/USB_BTN_Test" },
  { name: "sl1/motormeter" },
  { name: "sl1/uvcalibrator" },
  { name: "sl1s_led_boost/1" },
  { name: "slc06_tester/1" },
  { name: "slc06_tester/2" },
  { name: "xbud_tester/1" },
  { name: "xbud_tester/2" },
  { name: "xbud_tester/3" },
  { name: "xbud_tester/4" },
  { name: "xbud_tester/5" },
  { name: "xl_bedcomplete_tester/1" },
  { name: "xl_bedcomplete_tester/2" },
  { name: "xl_bud_tester/1" },
  { name: "xl_bud_tester/2" },
  { name: "xl_cheese_tester/1" },
  { name: "xl_dwarf_tester/1" },
  { name: "xl_dwarf_tester/2" },
  { name: "xl_dwarf_tester/3" },
  { name: "xl_extruder_tester/1" },
  { name: "xl_extruder_tester/2" },
  { name: "xl_hall_tester/1" },
  { name: "xl_mbed_tester/1" },
  { name: "xl_mbed_tester/2" },
  { name: "xl_mbed_tester/3" },
  { name: "xl_sandwich_tester/1" },
  { name: "xl_splitter_tester/1" },
  { name: "xlcd_tester/1" },
  { name: "xlcd_tester/2" },
  { name: "xlcd_tester/3" },
  { name: "xlcd_tester/4" },
  { name: "xlcd_tester/5" },
];

const ignore_list = [
  "display_transmission",
  "encl_basic_tester",
  "encl_led_tester",
  "fdm/F-senzor_test",
  "hb-mini",
  "hb-mk3",
  "he-mini-test",
  "he-mk3-test",
  "ledmodule-s",
  "loadcell_tester",
  "mini-tower-tester",
  "mmu2_tester",
  "sl1",
  "slc06_tester",
  "xlcd_tester",
];

function cutNumbers(msgPayload, ignore_list) {
  const msgTesters = [];
  const msgCount = [];

  msgPayload.forEach((tester) => {
    let partialName = tester.name.split("/")[0];

    if (
      !ignore_list.includes(partialName) &&
      !msgTesters.includes(partialName)
    ) {
      msgTesters.push(partialName);
    }

    // condition for testers in ignore_list
    const index = msgTesters.indexOf(partialName);
    if (index === -1) {
      return;
    }

    if (msgCount[index] === undefined) {
      msgCount[index] = 1;
    } else {
      msgCount[index] += 1;
    }
  });

  return { msgTesters, msgCount };
}

// data from testers.json
console.log(cutNumbers(msgPayload, ignore_list));
