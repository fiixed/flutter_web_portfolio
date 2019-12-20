import 'dart:ui' as ui;

import "file:///Users/andrewb/development/andrew_bell.io/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
