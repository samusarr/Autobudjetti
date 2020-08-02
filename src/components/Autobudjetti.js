// import { Link } from "gatsby";
import styled from '@emotion/styled';
import React, { useState } from "react";
import { theme } from '../styles';
import { Row, Col, Form, InputNumber, Select, Input } from 'antd';
import { Card, StyledButton, CarBudgetList, InfoPopper,  } from './shared';
import formValidation from './shared/formValidation';


const { Option } = Select;

const input_values = [
    {
      petrol: 1.389,
      diesel: 1.189,
      kilometres: 10000,
      parking: 30,
      inspection: 60,
      carservice: 500,
      tires: 150,
      make: 'Esimerkki',
      model: 'Auto',
      consumption: 6,
      insurance: 350,
      taxes: 150,
      price: 10000,
      usepower: "1"
    },
  ]

const AutoBudjetti = () => {


  const [form] = Form.useForm();
  const [step, setStep] = useState(1);
  const [budgets, setBudget] = useState(input_values);

  //setting initial values for form
  form.setFieldsValue({
    inspection: 60,
    carservice: 500,
    tires: 150
  })

  // add form data to array
  const onFinish = (data) => {
    const newBudget = [...budgets, data];
    setBudget(newBudget);
    //data.taxes = 0;
  }

  // delete selected card from array
  const onDelete = (index) => {
    const newBuds = [...budgets];
    newBuds.splice(index, 1);
    setBudget(newBuds);
  }

  // form steps (validation should be added)
  const changeStep = (newStep) => {
    form
      .validateFields()
      .then(() => {
        setStep(newStep)  
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  // add-button functionality
  const newCar = () => {
    form.setFieldsValue({
      consumption: 0,
      insurance: 0,
      taxes: 0,
      price: 0,
      usepower: 'Valitse',
      make: '',
      model: ''
    })
  }


  const DescTexts = [
    'Täytä kaikki alla olevat tiedot',
    'Täytä autoa koskevat tiedot'
  ]

  

  return (
    <Container>
      <Row 
        justify='center'
        gutter={[16, 16]}
      >
        <Col xs={24} sm={22} md={11} lg={8} xl={8} xxl={8}>
          
            <Desc>{DescTexts[step-1]}</Desc>
            <Form
                layout='vertical'
                form={form}
                name="car-budget"
                onFinish={onFinish}
                validateMessages={formValidation}
                size='large'
              >
                <FormStep active={step === 1}>
                  <LightCard>
                    <Row justify="space-around" gutter={[8,0]}>
                      <Col span={12}>
                      <FormItem
                        name='petrol'
                        label='Bensa €/l'
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                      <NumberInput/>
                    </FormItem>
                    
                      </Col>
                      <Col span={12}>
                      <FormItem
                      name='diesel'
                      label='Diesel €/l'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <NumberInput/>
                    </FormItem>
                      </Col>
                    </Row>
                    <Row justify='center'>
                      <Col>
                        <GasPrices>Katso tämänhetkiset polttoaine hinnat <a href='https://www.polttoaine.net' target='_blank' rel="noreferrer">täältä</a></GasPrices>
                      </Col>
                    </Row>
                    <Row justify="space-around" gutter={[8,0]}>
                      <Col span={12}>
                      <FormItem
                      name='kilometres'
                      label='Kilometrit / vuosi'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <NumberInput/>
                    </FormItem>
                      </Col>
                      <Col span={12}>
                      <FormItem
                      name='parking'
                      label='Pysäköinti €/kk'
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <NumberInput />
                    </FormItem>
                      </Col>
                    </Row>
                  </LightCard>
                  <ColorCard>
                    <Row justify="space-between" align='middle' gutter={[16, 16]}>
                      <Col span={8} offset={0}>
                      
                        <Form.Item
                          name='inspection'
                          label={<InfoPopper label='Katsastus' tooltip='Katsastus maksaa kalleimmillaan 60€, uusi auto tarvitsee tietysti katsastaa harvemmin.'/>}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <NumberInput/>
                        </Form.Item>
                      
                      
                      
                      </Col>
                      <Col span={8}>
                      
                      <Form.Item
                        name='carservice'
                        label={<InfoPopper label='Huolto' tooltip='Auton huoltokustannuksia on vaikea arvioida etukäteen, siihen kannattaa kuitenkin varautua reilusti. Jos autoon tarvitsee tehdä ainoastaan perushuoltoa, voi siitä selvitä todella edullisesti.'/>}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <NumberInput/>
                      
                      </Form.Item>
                      </Col>
                      <Col span={8}>
                      <Form.Item
                        name='tires'
                        label={<InfoPopper label='Renkaat' tooltip='Renkaita ei tarvitse uusia joka vuosi, riippuen tietysti paljonko kilometrejä kertyy. Jos ajatellaan että renkaat kestävät noin 4 vuotta, voidaan laskea että joka toinen vuosi tulisi ostaa uudet renkaat (kesä- ja talvirenkaat erikseen). Keskimääräinen kustannus siis noin 150€ vuodessa, riippuen tietysti minkälaiset renkaat ostaa.'/>}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <NumberInput/>
                      </Form.Item>
                      </Col>
                    </Row>
                  </ColorCard>
                    <NextButton type="primary" onClick={() => changeStep(2)}>
                      Seuraava
                    </NextButton>
                </FormStep>
                <FormStep active={step === 2}>
                  <LightCard id='car-info'>
                  <Row justify="space-around" gutter={[8,0]}>
                      <Col span={12}>
                      <FormItem
                        name='make'
                        label='Automerkki'
                        
                      >
                      <Input/>
                    </FormItem>
                    
                      </Col>
                      <Col span={12}>
                      <FormItem
                      name='model'
                      label='Malli'
                      
                    >
                      <Input/>
                    </FormItem>
                      </Col>
                    </Row>
                    <FormItem
                        name='consumption'
                        label='Auton kulutus l/100km'
                        rules={[
                          {
                            required: step === 2,
                          },
                        ]}
                      >
                      <NumberInput/>
                    </FormItem>
                    <FormItem
                      name='insurance'
                      label='Vakuutusmaksu'
                      rules={[
                        {
                          required: step === 2,
                        },
                      ]}
                    >
                      <NumberInput/>
                    </FormItem>
                    <FormItem
                      name='taxes'
                      label='Vero (myös käyttövoimavero)'
                      rules={[
                        {
                          required: step === 2,
                        },
                      ]}
                    >
                      <NumberInput/>
                    </FormItem>
                    <FormItem
                      name='price'
                      label='Auton hinta'
                    >
                      <NumberInput/>
                    </FormItem>
                    <FormItem
                      name="usepower"
                      label="Käyttövoima"
                      rules={[
                        {
                          required: step === 2,
                        },
                      ]}
                    >
                      <Select placeholder="Käyttövoima">
                        <Option value='1'>Bensa</Option>
                        <Option value='2'>Diesel</Option>
                      </Select>
                    </FormItem>
                  </LightCard>
                  <ChangeButton type="primary" onClick={() => setStep(1)}>
                    Vaihda alkutietoja
                  </ChangeButton>
                  
                    <CalculateButton type="primary" htmlType="submit">
                      Laske
                    </CalculateButton>
                  
                </FormStep>
            </Form>
          
            
        </Col>
        <Col xs={24} sm={22} md={13} lg={12} xl={14} xxl={12} id='cars'>
          <Desc>AUTOT</Desc>
          <CarBudgetList budgets={budgets} onDelete={onDelete}/>
          <StyledButton type="primary" onClick={newCar}>
            Lisää +
          </StyledButton>
        </Col>
      </Row>
    </Container>
  )
}

export default AutoBudjetti;

const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${theme.colors.lightblue};
  @media only screen and (min-width: ${theme.breakpoints.l}) {
    margin-top: 0px;
  }
  @media only screen and (max-width: ${theme.breakpoints.xs}) {
    margin-top: 0px;
  }
`

const LightCard = styled(Card)`
  background-color: ${theme.colors.white};
`

const ColorCard = styled(Card)`
  background-color: ${theme.colors.primary};
  margin-top: 25px;
  text-align: center;
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    margin-top: 0px;
  }
`

const FormStep = styled.div`
  height: ${(props) => (props.active ? 'auto' : '0')};
  opacity: ${(props) => (props.active ? '1' : '0')};
  display: ${(props) => (props.active ? '' : 'none')};
`

const NumberInput = styled(InputNumber)`
  width: 100%;
  color: #000000;
  font-size: 25px;
  font-weight: 700;
`

const FormItem = styled(Form.Item)`
  label {
    font-size: 20px;
    font-weight: 600;
    color: #6288A8;
  }
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    margin: 0px;
  }
`

const GasPrices = styled.p`
  font-size: 20px;
  font-weight: 600;
  @media only screen and (max-width: ${theme.breakpoints.s}) {
    font-size: 15px;
  }
`

const NextButton = styled(StyledButton)`
  float: right;
  margin-top: 25px;

`

const CalculateButton = styled(StyledButton)`
  float: right;
  margin-top: 25px;
`

const ChangeButton = styled(StyledButton)`
  margin-top: 25px;
  @media only screen and (max-width: ${theme.breakpoints.m}) {
    padding: 10px 10px;
    
  }
`

const Desc = styled.p`
  color: #6288A8;
  text-align: center;
  margin: 15px;
  text-transform: uppercase;
  @media only screen and (min-width: ${theme.breakpoints.l}) {
    font-size: 25px;
  }
  @media only screen and (max-width: ${theme.breakpoints.l}) {
    font-size: 20px;
  }
`
