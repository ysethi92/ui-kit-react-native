# UI-Kit-for-react-native

A collection of ready to use React Native components which you can edit or override according to your need.

# Installation

You can clone this git repository by using following steps

```bash

```

# Components 

## 1. Avatar
Avatars are used to visually represent a user or a person with which it is associated

### Usage
```javascript
<View style={styles.container}>
    <Text>Avatar Icon</Text>
    <Avatar Icon name="ios-menu" size={40} color="white"/>
    <Text>Avatar Label</Text>
    <Avatar Label name="AG" size={40} color="white" />
    <Text>Avatar Image</Text>
    <Avatar Image source={{uri:uri}} size={40} />
</View>
```

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|source |-|-|Image path for thumbnail|
|color |-|-|Color of a label or icon|
|Size|-|-|Size of the avatar|
|icon|-|-|Represents icon as an avatar|
|label |-|-|Represents label as an avatar|
|image |-|-|Represent image as an avatar|

## 2. Button
For interaction between user and system buttons are used. They are the touchable component found in almost every interactive application. 

```javascript
</View>
  <Button
      text="Primary"
      round
      theme="primary"
      onPress={() => null}
  />
  <Button
      text="Success"
      round
      theme="success"
      onPress={() => null}
  />
  <Button
      text="Warning"
      round
      theme="warning"
      onPress={() => null}
  />
</View>
```
### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|source |-|-|Image path for thumbnail|
|color |-|-|Color of a label or icon|
|Size|-|-|Size of the avatar|
|icon|-|-|Represents icon as an avatar|
|label |-|-|Represents label as an avatar|
|image |-|-|Represent image as an avatar|

## 3. Cards
#### Card
* This component adds a box-shadow by default.
* It also provides default spacing and alignment between cards.
#### CardItem
* This is the child component of Card.
* Works very similar to the list items of the list.
* Takes input such as Text, Button, Image, Thumbnail, Icon.
* The card takes any number of CardItem.

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|header |-|-|Displays text as a header for cards|
|body |-|-|Defines section for the body of the card.The child components are rendered with proper spacing and alignment.|
|footer|-|-|Displays text as a footer for cards|
|button|-|-|To navigate on the click of a card item|
|border|false|boolean| Adds border to the cardItems |

## 4. Checkbox
Checkbox are used to select between the choices where the multiple options can be selected.

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|entries |-|-|List of the description of the checkboxes.|
|backgroundColor |red||Color of the selected checkboxes|

## 5. Floating Button
Floating buttons are overlay button found in most of the latest apps.

```javascript
<FB 
  onPress = {this.clickHandler}
  style =  {styles.FB} 
  imageUri = {require('./assets/plus-icon.png')}
 />
```

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|source |-|-|Image path for thumbnail|
|color |-|-|Color of a label or icon|
|Size|-|-|Size of the avatar|
|icon|-|-|Represents icon as an avatar|
|label |-|-|Represents label as an avatar|
|image |-|-|Represent image as an avatar|

## 6. Header
Header represents the information about the screen where the user is at that moment. 

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|search |-|-|Search icon in the header|
|back |-|-|Back button in the header|
|hidden|true|-|By default, the status bar is hidden|
|headerText|Header|-|Description of the header|
|textSize |22|-|The text size of the description|
|backgraoundColor |skyblue|-|The background color of the header.|

## 7. Radio Button
Radio Button are provided where only one option needs to be selected between the given items.

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|entries |-|-|List of the description of Radio button.|
|backgroundColor |red||Color of the selected button|


## 8. Spinner
Spinner represents loading screen

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|size |small|-|The spinner has two sizes: small and large|
|color |black|-|Color of a spinner|

## 9. Text
Text includes words and sentences of different styles.

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|h1 |boolean|-|font size 40 (optional)|
|h2 |boolean|-|font size 34 (optional)|
|h3|boolean|-|font size 28 (optional)|
|h4|boolean|-|font size 22 (optional)|
|h1Style |Text style(object)|-|Styling for when *h1* is set (optional)|
|h2Style |Text style(object)|-|Styling for when *h2* is set (optional)|
|h3Style |Text style(object)|-|Styling for when *h3* is set (optional)|
|h4Style |Text style(object)|-|Styling for when *h4* is set (optional)|
|Style |Text style(object)|-|add additional styling for Text (optional)|

## 10. Thumbnail
It is the small image representation of larger image.

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|source |-|-|Image path for thumbnail|
|rounded |-|-|Represents the shape of a thumbnail|
|square|-|-|Represents shape of the thumbnail By default, the thumbnail is square in shaper|
|small|-|-|Small thumbnail with width and height of 36px|
|large |-|-|Large thumbnail with width and height of 80px|


