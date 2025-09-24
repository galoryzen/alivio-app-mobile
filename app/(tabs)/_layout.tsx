import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import CalendarioScreen from "./calendario";
import EquiposScreen from "./equipos";
import AlarmsScreen from "./alarms";

export default function TabLayout() {
  const [index, setIndex] = useState(0);

  const routes = [
    {
      key: "alarmas",
      title: "Alarmas",
      focusedIcon: "alarm",
      unfocusedIcon: "alarm",
    },
    {
      key: "equipos",
      title: "Equipos",
      focusedIcon: "account-group-outline",
      unfocusedIcon: "account-group-outline",
    },
    {
      key: "calendario",
      title: "Calendario",
      focusedIcon: "calendar",
      unfocusedIcon: "calendar",
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    alarmas: AlarmsScreen,
    equipos: EquiposScreen,
    calendario: CalendarioScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      sceneAnimationEnabled={false}
      labeled={true}
      compact={false}
      barStyle={{
        elevation: 0,
        shadowOpacity: 0,
        borderTopWidth: 0,
      }}
    />
  );
}
