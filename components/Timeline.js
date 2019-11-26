
import React, { Component } from 'react';
import {
    Container, Icon, Text, Content,
    Card, CardItem, Thumbnail, Body, Left, Right,
    Button
} from 'native-base';
import { Image } from 'react-native'
class ItemStatus extends Component {
    render() {
        return <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={this.props.profileImage} />
                    <Body>
                        <Text>{this.props.name} </Text>
                        <Text note>{this.props.timePost}</Text>
                    </Body>
                </Left>
            </CardItem>

            <CardItem cardBody>
                <Image source={this.props.bodyImage}
                    style={{ height: 200, width: null, flex: 1 }}
                />

            </CardItem>

            <CardItem style={{ height: 45 }}>
                <Left>
                    <Button transparent>
                        <Icon name='thumbs-up'
                            style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name='heart'
                            style={{ color: 'black' }} />
                    </Button>
                    <Button transparent>
                        <Icon name='chatboxes'
                            style={{ color: 'black' }} />
                    </Button>
                </Left>

                <Right>
                    <Text
                    //  onPress={() => this.props.detail()} 
                     
                     onPressIn={(()=>alert('click-in'))}
                     onPressOut={(()=>alert('click-out'))} 
                         onLongPress={(()=>alert('keep screen'))}
                    
                    style={{ paddingBottom: 20 }}>See more</Text>
                </Right>

            </CardItem>

            <CardItem>
                <Body>
                    <Text>
                        {this.props.status}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    }
}

export default class Timeline extends Component {

    render() {
        let images = [
            {
                key: "1",
                timePost: "12h30 12/06/2019",
                name: "Dat Uchiha",
                profileImage: require('../Images/dat.jpg'),
                bodyImage: require('../Images/new.jpg'),
                status: "I am Chu Thanh Dat , I live in Hanoi, Vietnam I am a fullstack developer web and mobile inlucde ios and android. My skill is java,php and javascript include Nodejs,Reactjs,React Naive. Databse which i know is Mysql, MongoDb, RealmDb,Firebase... "
            },
            {
                key: "2",
                timePost: "1h30 16/06/2019",
                name: "Mason Mout",
                profileImage: require('..//Images/masonmout.jpg'),
                bodyImage: require('../Images/new2.jpeg'),
                status: 'When you play in these big games, you know that small details can make the difference. Sometimes we were unlucky, sometimes we made the wrong choice and we have to improve'
            },
            {
                key: "3",
                timePost: "9h30 12/07/2019",
                name: "Jorginho",
                profileImage: require('../Images/jorghinho.jpg'),
                bodyImage: require('../Images/new3.jpg'),
                status: 'We competed and gave them a very difficult game -Frank Lampards reaction to todays defeat...'
            },
        ];
        return (<Container>
            <Content>
                {images.map(eachImage => {
                    return <ItemStatus
                        key={eachImage.key}
                        profileImage={eachImage.profileImage}
                        bodyImage={eachImage.bodyImage}
                        status={eachImage.status}
                        name={eachImage.name}
                        timePost={eachImage.timePost}
                        detail={() => this.props.navigation.navigate('Detail')}
                    />
                })}
            </Content>
        </Container>);
    }
}