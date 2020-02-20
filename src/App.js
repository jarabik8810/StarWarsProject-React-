import React, { Component } from 'react';
import ButtonList from './ButtonList';
import Character from './Character';



class App extends Component {

    state = {
        characters: [
            {
                name: 'Darth Vader',
                image: 'https://www.lego.com/r/www/r/catalogs/-/media/catalogs/characters/star%20wars/new%20thumbnails/darth_vader-thumb.png?l.r=1021815190',
                selected: false
            },
            {
                name: 'Kylo Ren',
                image: 'https://banner2.kisspng.com/20180510/xoq/kisspng-kylo-ren-legoland-florida-legoland-malaysia-resort-5af3db847e82c7.0852945815259308845182.jpg',
                selected: false
            },
            {
                name: 'Yoda',
                image: 'https://clipart.info/images/ccovers/1513358462Lego-Star-Wars-PNG.png',
                selected: false
            },
            {
                name: 'Rey',
                image: 'https://i.pinimg.com/736x/f1/18/6e/f1186eb351a59faffdfbff8a23bb6549--lego-minifigure-minifigures.jpg',
                selected: false
            }
        ]
    }
    onClickHandle = (index) => () => {
        this.setState({
            characters: this.state.characters.map((char, charIndex) =>
                ((charIndex === index) ? ({ ...char, selected: true }) : ({ ...char, selected: false }))
            )
        });
    }
    render() {
        return (
            <div>
                <ButtonList onClickFunc={this.onClickHandle} characters={this.state.characters} />
                <Character selectedChar={this.state.characters.find(char => char.selected)} />
            </div>
        )
    };
}


export default App;