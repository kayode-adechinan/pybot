import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Container, Header,
    Segment, Input, Icon, Select, Label, Menu, Table } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSearch: false,
            data: [
                {
                    name: "product 1",
                    price: 1000,
                    id: 1
                },
                {
                    name: "product 2",
                    price: 2000,
                    id: 2
                },
                {
                    name: "product 3",
                    price: 3000,
                    id: 3
                }
            ],
            products: [
                {
                    family: "ARMOIRE",
                    name: "ARMOIRE 2 ROTRS DE MARQUE DACOTA",
                    unity: "",
                    price1: "1 783 500",
                    price2: "2 029 688",
                    price3: "",
                    priceM: "1 906 594",
                    bi:"1 429 946",
                    bs:"2 383 243",
                    id: 1
                },
                {
                    family: "ARMOIRE",
                    name: "ARMOIRE 20 CASIERS ASHRO-SU-COSMETAL",
                    unity: "",
                    price1: "600 000",
                    price2: "",
                    price3: "",
                    priceM: "",
                    bi:"450 000",
                    bs:"750 000",
                    id: 2
                },
                {
                    family: "ARMOIRE",
                    name: "ARMOIRE 3 ROTRS DE MARQUE DACOTA",
                    unity: "",
                    price1: "2 772 233",
                    price2: "3 154 610",
                    price3: "",
                    priceM: "2 963 422",
                    bi:"2 222 566",
                    bs:"3 704 277",
                    id: 3
                },
                {
                    family: "ARMOIRE",
                    name: "ARMOIRE 5 ROTRS DE MARQUE DACOTA",
                    unity: "",
                    price1:"3 525 000" ,
                    price2:"4 023 991",
                    price3:"",
                    priceM:"3 774 496",
                    bi:"2 830 872",
                    bs:"4 718 119",
                    id: 4
                },
                {
                    family: "ARMOIRE",
                    name: "ARMOIRE 6 ROTRS DE MARQUE DACOTA",
                    unity: "",
                    price1: "3 926 966",
                    price2: "4 468 617",
                    price3: "",
                    priceM: "4 197 792",
                    bi:"3 148 344",
                    bs:"5 247 239",
                    id: 5
                },
            ],
            filteredData:[]
        }
    }


    filter(event){
        event.preventDefault();

        this.setState({
            /*filteredData: this.state.filteredData.push({
                    name: event.target.value,
                    price: 4000,
                    id: 4032
            })*/
            /*filteredData: this.state.filteredData.concat([{
                    name: event.target.value,
                    price: 4000,
                    id: 4
            }])*/
            isSearch:true,
            filteredData: this.state.products.filter(product =>
                product.name.indexOf(event.target.value) !== -1)

        });



    }


    render() {


        var productList = null;

        if(this.state.isSearch){
            productList = this.state.filteredData.map((product) =>
                <Table.Row key={product.id}>
                    <Table.Cell>
                        <Label ribbon>{product.id}</Label>
                    </Table.Cell>
                    <Table.Cell>{product.family}</Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.unity}</Table.Cell>
                    <Table.Cell>{product.price1}</Table.Cell>
                    <Table.Cell>{product.price2}</Table.Cell>
                    <Table.Cell>{product.price3}</Table.Cell>
                    <Table.Cell>{product.priceM}</Table.Cell>
                    <Table.Cell>{product.bi}</Table.Cell>
                    <Table.Cell>{product.bs}</Table.Cell>
                </Table.Row>)
        }
        else {
            productList = this.state.products.map((product) =>
                <Table.Row key={product.id}>
                    <Table.Cell>
                        <Label ribbon>{product.id}</Label>
                    </Table.Cell>
                    <Table.Cell>{product.family}</Table.Cell>
                    <Table.Cell>{product.name}</Table.Cell>
                    <Table.Cell>{product.unity}</Table.Cell>
                    <Table.Cell>{product.price1}</Table.Cell>
                    <Table.Cell>{product.price2}</Table.Cell>
                    <Table.Cell>{product.price3}</Table.Cell>
                    <Table.Cell>{product.priceM}</Table.Cell>
                    <Table.Cell>{product.bi}</Table.Cell>
                    <Table.Cell>{product.bs}</Table.Cell>
                </Table.Row>)

        }




        return (

        <div>

            <AppHeader/>

            <SearchBar filter={this.filter.bind(this)}/>

            <TableOfProduct productsList = {productList} />



        </div>);
    }
}

class AppHeader extends Component{



    render(){

        const componentStyle = {
            backgroundColor:"#20232a",
            color:"#61dafb"
        }

        return (
                    <Segment style={componentStyle} basic size="massive" textAlign="center" padded='very'>
                        REPERTOIRE DES PRIX DE REFERENCE A L'USAGE DE L'ADMINISTRATION PUBLIQUE
                    </Segment>

            )

    }
}


class AppFooter extends Component {

    render(){

        const componentStyle = {
            backgroundColor: '#222',
            color:"#fff"

        }

        return (
            <Segment style={componentStyle} basic size="small" textAlign="center" padded>
                Wakilu Software !
            </Segment>

        )

    }
}

class SearchBar extends Component {
    render() {
        const options = [
            { key: 'all', text: 'Tout', value: 'all' },
            { key: 'articles', text: 'Désignation', value: 'articles' },
            { key: 'products', text: 'Prix médian', value: 'products' },
        ]

        return (

            <Container textAlign="center">



                <Input fluid type='text' defaultValue='Entrez votre requête ...'
                       action
                       onChange={this.props.filter}>
                    <input />
                    <Select compact options={options} defaultValue='articles' />
                    <Button type='submit'>Rechercher</Button>
                </Input>

            </Container>

    );
    }
}


class TableOfProduct extends Component {
    render() {

        const componentStyle = {
            paddingTop: 10
        }

        return (

        <Container style={componentStyle}>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Nom de famille</Table.HeaderCell>
                        <Table.HeaderCell>Désignation du produit</Table.HeaderCell>
                        <Table.HeaderCell>Unité</Table.HeaderCell>
                        <Table.HeaderCell>Prix Pv1</Table.HeaderCell>
                        <Table.HeaderCell>Prix Pv2</Table.HeaderCell>
                        <Table.HeaderCell>Prix Pv3</Table.HeaderCell>
                        <Table.HeaderCell>Prix médian</Table.HeaderCell>
                        <Table.HeaderCell>BI</Table.HeaderCell>
                        <Table.HeaderCell>BS</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.productsList}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='10'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='left chevron' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='right chevron' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        </Container>);
    }
}


//export default App;

export default Main;