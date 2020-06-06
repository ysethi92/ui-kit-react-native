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
          
          
          <Text style={styles.textS}>This is cardItem  with header, body, footer</Text>
  
          <Card >
            <CardItem header>
            <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
          
          <Text style={styles.textS}>This is bordered cardItem  with header, body, footer</Text>
  
          <Card>
            <CardItem border header>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem border body>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem border footer>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
  
          <Text style={styles.textS}>This is button cardItem with header, body, footer</Text>
  
          <Card>
            <CardItem header button onPress={() => alert('This is  card header with button')}>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body button onPress={() => alert('This is  card body with button')}>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer button onPress={() => alert('This is  card footer with button')}>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
  
          <Text style={styles.textS}>This is button borderd cardItem with header, body, footer</Text>
  
          <Card>
            <CardItem header button border onPress={() => alert('This is  card header with button')}>
              <Text style={{ fontWeight: 'bold'}}>UI Component Kit</Text>
            </CardItem>
            <CardItem body button border onPress={() => alert('This is  card body with button')}>
              <Text>This is free open source UI Component kit </Text>
            </CardItem>
            <CardItem footer button border onPress={() => alert('This is  card footer with button')}>
              <Text style={{ fontWeight: 'bold'}}>By AVVY</Text>
            </CardItem>
          </Card>
