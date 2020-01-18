import 'package:flutter/material.dart';


class ResumeTab extends StatelessWidget {
  const ResumeTab({Key key}) : super(key: key);

  

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
          child: Center(
        child: Column(children: <Widget>[
          Image.asset('assets/andrew_bell_1.jpg'),
          Image.asset('assets/andrew_bell_2.jpg'),
        ],),
        ),
    );
    
  }
}
