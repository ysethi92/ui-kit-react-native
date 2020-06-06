# UI-Kit-for-react-native
We have made effective building blocks referred to as components. The Components are constructed in pure [React Native](https://github.com/facebook/react-native) platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.
A collection of ready to use React Native components which you can edit or override according to your need.

# Installation

You can use the components by using following steps
1. Open command prompt and navigate to your working directory.
2. Clone the repository in your project directory.
```bash
git clone https://github.com/ysethi92/ui-kit-react-native.git
```
3. Import the Component needed in your project.
```javascript
import {<component-name>} from './ui-kit-react-native/components'
```

# Components 

### List of Components:
1. [Avatar](#1-avatar)
2. [Button](#2-button)
3. [Card](#3-card)
4. [Checkbox](#4-checkbox)
5. [Floating Button](#5-floating-button)
6. [Header](#6-header)
7. [List](#7-list)
8. [Radio Button](#8-radio-button)
9. [Spinner](#9-spinner)
10.[Text](#2-text)
11.[Thumbnail](#11-thumbnail)

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


### Usage
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

### Usage
```javascript
<Card>
  <CardItem header >
      <Left>
        <Thumbnail Rounded size="medium" source={require('./assets/Amish-Tripathi.jpg')}>
        </Thumbnail>
      </Left>
      <Body>
        <Text>Amish Tripathi</Text>
        <Text note>Author</Text>
      </Body>

    </CardItem>
    <CardItem body>

        <Image source={require('./assets/bg.jpg')} style={{height: 100, width: '100%'}}/>

    </CardItem>
  
</Card>
```


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

### Usage

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

### Usage

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|search |-|-|Search icon in the header|
|back |-|-|Back button in the header|
|hidden|true|-|By default, the status bar is hidden|
|headerText|Header|-|Description of the header|
|textSize |22|-|The text size of the description|
|backgraoundColor |skyblue|-|The background color of the header.|

## 7. List
* List: This component defines a section to include your list items.
* ListItem:
    * This is the child component of List.
    * Defines a list item.
    * Adds border at bottom of each ListItem.
    * The list takes any number of ListItem.
    * Takes input such as Text, Badge, Thumbnail, Icon.


### Usage
```javascript
<List>
     <ListItem divider>
       <Text h4>A</Text>
     </ListItem>
     <ListItem>
       <Left><Text>Anmol</Text></Left>
       <Right><Icon name="angle-right"/></Right>
     </ListItem>
     <ListItem onPress={() => alert("HI")}>
       <Text>Akbar</Text>
     </ListItem>
     <ListItem >
     <Left>
         <Thumbnail Rounded size="small" source={require('./assets/Amish-Tripathi.jpg')}>
         </Thumbnail>
       </Left>
       <Body>
         <Text style={{fontWeight: 'bold'}}>Amish Tripathi</Text>
         <Text note>Author</Text>
       </Body>
       <Right><Text note>3:45 pm</Text></Right>
     </ListItem>

     <ListItem>
       <Left><Text>Baban</Text></Left>
       <Right><Icon name="angle-right"/></Right>
     </ListItem>

     <ListItem>
       <Left><Text>Cisco</Text></Left>
       <Right><Icon name="angle-right"/></Right>
     </ListItem>
     <ListItem onPress={() => alert("HI")}>
       <Text>Clark</Text>
     </ListItem>
</List>
```

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|divider |-|boolean|It helps to organize and group the list items.|
|icon |||To have list styling of icons|

## 8. Radio Button
Radio Button are provided where only one option needs to be selected between the given items.

### Usage

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|entries |-|-|List of the description of Radio button.|
|backgroundColor |red||Color of the selected button|


## 9. Spinner
Spinner represents loading screen

### Usage
```javascript
<Spinner
    size="large"
    color="skyblue"
/>
```

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|size |small|-|The spinner has two sizes: small and large|
|color |black|-|Color of a spinner|

## 10. Text
Text includes words and sentences of different styles.

### Usage
```javascript
<View style={styles.container}>
  <Text h1 h1Style={{color: 'blue', fontStyle: 'italic' }}>Title 1</Text>
  <Text h2 h2Style={{color: 'green', fontStyle: 'italic' }}>Title 2</Text>
  <Text h3 h3Style={{color: 'red', fontStyle: 'italic' }}>Title 3</Text>
  <Text h4 h4Style={{color: 'yellow', fontStyle: 'italic' }}>Title 4</Text>
</View>
```

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

## 11. Thumbnail
It is the small image representation of larger image.

### Usage
```javascript
const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

<View style={styles.container}>
  <Text style={{fontWeight: 'bold'}}>Rounded Thumbnail</Text>
  <Text>Small</Text> 
  <Thumbnail Rounded size="small"  source={{uri: uri}} />
  <Text>Medium</Text>
  <Thumbnail Rounded size="medium"  source={{uri: uri}} />
  <Text>Large</Text>
  <Thumbnail Rounded size="large"  source={{uri: uri}} />
  <Text style={{fontWeight:'bold'}}>Square Thumbnail</Text>
  <Text> Small</Text>
  <Thumbnail size="small" source={{uri: uri}} />
  <Text>Medium</Text>
  <Thumbnail size="medium" source={{uri: uri}} />
  <Text>Large</Text>
  <Thumbnail size="large" source={{uri: uri}} />
</View>
```

### Props Reference:

| Property | Default | Option | Description |
|---------:|--------:|-------:|------------:|
|source |-|-|Image path for thumbnail|
|rounded |-|-|Represents the shape of a thumbnail|
|square|-|-|Represents shape of the thumbnail By default, the thumbnail is square in shaper|
|small|-|-|Small thumbnail with width and height of 36px|
|large |-|-|Large thumbnail with width and height of 80px|


