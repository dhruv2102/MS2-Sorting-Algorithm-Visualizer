# [Sorting Algorithm Vizualization](https://dhruv2102.github.io/MS2-Sorting-Algorithm-Visualizer/)

## Content

- [Introduction](#introduction)
- [Wireframes](#wireframes)
- [User Stories](#User-Stories)
- [Site Owner Goals](#Site-Owner-Goals)
- [Technologies Used](#Technologies-used)
- [Testing](#testing)
- [Deployment](#Deployment)
- [Running Project Locally](#running-project-locally)
- [Credits](#Credits)

![View across different Displays](/assets/images/an_i_responsive.png)

## Introduction

This site is to help visualize different sorting algorithms. 

## Wireframes
Balsamiq was used to design the following

![Wireframes](assets/images/wireframes.png)


## User Stories
- User should be able to select the algorithm from which he/she can sort the array
- User can specify the size of the array
- User can instruct when to start the sorting. 
- User can specify the speed of sorting
- User can ony change the speed while sorting is in progress

## Site Owner Goals
- Easy to use
- Easy to understand

## Technologies Used
<!-- From MS1 -->
- [HTML](https://en.wikipedia.org/wiki/HTML5)
    - HTML was to give structure to page and content

- [CSS](https://en.wikipedia.org/wiki/CSS)
    - CSS was used to style the content

- [Javascript](https://www.w3schools.com/js/DEFAULT.asp)
    - Javascript was used to design the backend systems of the algorithm

- [Bootstrap 4.5](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - This helped made content responsive 

- [Git](https://git-scm.com/)
    - Git was used for version control, which helped in keeping track of changed files

- [GitHub](https://github.com/)
    - Github was used to store and deploy the project

- [Gitpod](https://www.gitpod.io/)
    - Gitpod was used to write code in. It is a cloud based platform 

- [Balsamiq](https://balsamiq.com/wireframes/)
    - Balsmiq was used to design the basic structure of the website

- [Stack Overflow](https://stackoverflow.com/)
    - Stack overflow was used to debug code

- [W3schools](https://www.w3schools.com/)
    - This was used to understand concept of flexbox and get overlay code

- [Code Institute learning platform](https://codeinstitute.net/)
    - With the help of code institute I was able to understand how a static website is made

- [Geeks for Geeks](https://www.geeksforgeeks.org/)
    - This website helped me understand how the different algorithms can be implemented

- [Jigsaw](https://jigsaw.w3.org/css-validator/validator)
    - Tool for CSS validation

- [W3C validator](https://validator.w3.org/)
    - Tool for HTML validation

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
    - Tool for performance, accessiblity analysis

- [Am I Responsive](http://ami.responsivedesign.is/)
    - Tool used to check how website will look across different screen size


## Testing

During the development of website, google chrome developer tools were used to test the website and check the responsiveness of the code implemented. The final testing was done on
- Dell Latitude 7410, 14" screen
- HP 24f Monitor
- Oneplus 6T

### General Tests

1. Pages are loaded correctly
    - Testing if pages was being loaded correctly
    - Result: Web page is being loaded correctly

2. Clicking on Logo brings back to home screen
    - Result: When the logo is clicked on, it brings back to the home screen

3. Checking if the Size and Speed Slider work
    - Result: Both the sliders work perfectly and change values as required

4. Dropdown list is working
    - Result: Dropdown list is working fine and selecteing the desired algorithm

5. Sort array button working
    - CLicking the button results in the array to be sorted

6. W3C Validator Test
    ![W3C Results](/assets/images/w3c.png)

7. Jigsaw Validator Test
    ![Jigsaw Validator](/assets/images/css.png)

8. Lighthouse Validator
    - Mobile
    ![Loghouse Mobile Results](/assets/images/lighthouse_mobile.png)

    - Desktop
    ![Loghouse Mobile Results](/assets/images/lighthouse_desktop.png)
### Testing User Stories
All the user stories can be tested by the following pictures

![Testing Algorithm](/assets/images/user_stories/pic1.png)

- The pic above shoes a different algorithm and size of the array being selected than the default selection
- This confirms the size of the array and algorithm can be selected by the users choice

![Sorting in Progress](/assets/images/user_stories/pic2.png)
- This pic shows the inital speed selected wile the sorting is in progress.
- This checks the stories that user can specify when to start sorting and the speed of sorting

![Changing speed of sorting](/assets/images/user_stories/pic3.png)
- As it can be seen the speed of sorting can be easily changed when the sorting is in progess


## Deployment

I used github pages to deploy the website. To deploy a project, one should follow the following steps
1. Log into github and locate the repository.
2. Find the settings tab and click on it
3. Locate the GitHub pages section
4. In the source sub-section, select the master branch from dropdown
5. Click on save, and you'll find your live link there

The link to my project is: https://dhruv2102.github.io/MS2-Sorting-Algorithm-Visualizer/


## Running Project Locally
To run the project locally, follow these steps
1. Open the repository https://dhruv2102.github.io/MS2-Sorting-Algorithm-Visualizer/
2. Choose HTTPS clone option from the code button.
3. Copy this command
4. Open the directory where you want to clone the project to. 
5. Open the Git Bash terminal in the targeted directory.
6. Type the command git clone and then paste the HTTPS url
6. After the execution of the command, this repository would be created in the directory. 

## Acknowledgement

- I would like to thank my mentor for guiding me through the project

## Future Development

- Sorting algorithm comparator: Visualize two sorting algorithms side by side to indetify whihc one is faster


## Note
- All the algorithms were coded by my own with reference from Geeks for Geeks. 
- To help understand how to make site more visual for sorting algorithms, reference was taken from the repository: https://github.com/AbhishekPrakash5/Sorting-Visualization



