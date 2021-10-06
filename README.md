# Space Travler's Hub

In this project, we have worked with the real live data from the `SpaceX API`. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.

- The Space Travelers' Hub consists of `Rockets`, `Missions`, and the `My Profile` section.

## Built with

- HTML/CSS
- React-Redux
- Node.JS
- SpaceX API

### Project Requirements

#### Config & basic setup

- Create React App.
- Install React Redux, Redux Logger and React Router.
- Create routes and view components.Use `<NavLink />` for the page navigation links
- Create directories for all Redux state slice files.

#### Other Requirements

- Fetch data from the SpaceX API endpoints.
- Once the data are fetched, dispatch an action to store the selected data in Redux store
  - Rockets:
    - id, rocket_name, description, flickr_images
  - Missions:
    - mission_id, mission_name, description
- Use `useSelector()` Redux Hook to select the state slices and render lists of rockets and missions in corresponding routes
- Write actions and reducers for `booking rockets` and `joining missions`
- Write actions and reducers for `canceling rockets` and `leaving missions`
- Rockets that have already been reserved display a `Reserved` badge and `Cancel reservation` button
- Missions that the user has joined already display a badge `Active Member` instead of the default "NOT A MEMBER" and a button `Leave Mission`
- `My Profile` section compose of two column layout and list ONLY the `rockets reserved` and `missions joined` by the user

## Getting Started

If you want a copy of this file go to the github repository and download it from there

- [Space Travler's Hub](https://github.com/ridaarif98/space_travlers_hub)

### Live

[LiveDemo](https://medaminedev66.github.io/javascript-capstone/dist/)

### Setup

```cmd
 git clone https://github.com/ridaarif98/space_travlers_hub.git
 cd space_travlers_hub
```

### Install

```cmd
npm install
npm run build
```

### Usage

```cmd
npm start
```

## Author

👤 **Amine Smahi**

- GitHub: [@medaminedev66](https://github.com/medaminedev66)
- Twitter: [@medaminesmahi](https://twitter.com/medaminesmahi)
- LinkedIn: [Mohammed Amine Smahi ](https://www.linkedin.com/in/mohammed-amine-smahi-1b8615187/)

👤 **Rida Arif**

- GitHub: [@ridaarif98](https://github.com/ridaarif98)
- Twitter: [@ridaarif](https://twitter.com/Rida29984906)
- LinkedIn: [Rida Arif](https://www.linkedin.com/in/rida-arif-90945520b/)

=======

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ridaarif98/space_travlers_hub/issues).

=======

## Show your support

Give a ⭐️ if you like this project!

=======

## Acknowledgments

- Microverse for giving me this chance
- To my Stand Up Team and coding partners who kept my morale up!
- The amazing code reviewers for making me improve every day :thumbsup:

=======
