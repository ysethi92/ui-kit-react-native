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
             <ListItem onPress={() => alert("HI")}>
               <Text>Aktar</Text>
             </ListItem>
             <ListItem divider>
               <Text h4>B</Text>
             </ListItem>
             <ListItem>
               <Left><Text>Baban</Text></Left>
               <Right><Icon name="angle-right"/></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Bob</Text>
             </ListItem>

             <ListItem divider>
               <Text h4>C</Text>
             </ListItem>
             <ListItem>
               <Left><Text>Cisco</Text></Left>
               <Right><Icon name="angle-right"/></Right>
             </ListItem>
             <ListItem onPress={() => alert("HI")}>
               <Text>Clark</Text>
             </ListItem>
     </List>
