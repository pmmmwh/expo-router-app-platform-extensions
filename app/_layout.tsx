import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

export default function RootLayout() {
  return (
    <Fragment>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
    </Fragment>
  );
}
