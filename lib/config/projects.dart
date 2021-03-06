import 'package:andrew_bell/models/project_model.dart';
import 'assets.dart';

final List<Project> projects = [
  Project(
      name: 'Video Diary',
      image: Assets.video_diary,
      description:
          'Record your personal thoughts and daily life.  Built using Flutter',
      link: 'https://play.google.com/store/apps/details?id=com.fiixed.video_diary'),
  Project(
      name: 'Invest Austin',
      image: Assets.invest_austin,
      description:
          'Gain a sneak-peek into Austin\'s future, as it extends the current landscape using in-context AR. \n\nClick to watch me present the app at the global Unite 17 conference',
      link: 'https://www.youtube.com/watch?v=QDQsg1hPa38'),
  Project(
      name: 'AgView',
      image: Assets.agview,
      description:
          'Easy-to-use interface for digitally entering animal health certificate data for all species',
      link: 'https://apps.apple.com/tn/app/agview/id1401972444'),
  Project(
      name: 'Sirius Kickoff',
      image: Assets.sirius_kickoff,
      description:
          'The Sirius Kickoff conference mobile companion application is for the Sirius Kickoff conference.',
      link: 'https://apps.apple.com/in/app/sirius-kickoff/id1076884994'),
  Project(
      name: 'Sirius Madness',
      image: Assets.sirius_madness,
      description:
          'The Sirius Madness conference mobile companion application is for the Sirius Madness conference. ',
      link: 'https://apps.apple.com/in/app/sirius-madness/id1090833498'),
  Project(
      name: 'Davis Vision',
      image: Assets.davis_vision,
      description:
          'The Davis Vision mobile app has a number of industry-leading features to manage your vision care benefit while you are on-the-go. ',
      link: 'https://davisvision.com/app/'),
  Project(
      name: 'Tram Tracker',
      image: Assets.tram_tracker,
      description:
          'tramTRACKER – Melbourne’s official tram app for real-time tram arrival information.',
      link:
          'https://play.google.com/store/apps/details?id=com.yarratrams.tramtracker&hl=en_US'),
];
