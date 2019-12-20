import 'package:andrew_bell/pages/home_page.dart';
import 'package:andrew_bell/widgets/theme_inherited_widget.dart';
import 'package:flutter/material.dart';


import 'config/themes.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ThemeSwitcherWidget(
      initialDarkModeOn: false,
      child: AndrewBell(),
    );
  }
}
class AndrewBell extends StatelessWidget {
  const AndrewBell({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Andrew Bell',
      theme:ThemeSwitcher.of(context).isDarkModeOn?darkTheme(context):lightTheme(context),
      home: HomePage(),
    );
  }
}
