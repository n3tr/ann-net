import React from 'react'
import styled from 'react-emotion'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const Section = styled('section')`
  position: relative;
  padding: 0 0 80px;
  width: 100%;
  background: #f8f8f8;
`

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const AddressBox = styled('div')`
  flex: 1;
`

const LocationBox = styled(`div`)`
  flex: 1;
  position: relative;
`

const LocationText = styled('h4')`
  font-family: 'Kanit', sans-serif;
  text-align: center;
  font-size: 2.4em;
  line-height: 1.5em;
  font-weight: 200;
  margin-top: 2.4em;
  margin-bottom: 2.4em;
  
  @media (max-width: 600px) {
    font-size: 1.2em;
    
  }
`

const LocationMap = withScriptjs(
  withGoogleMap(() => {
    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 16.0603361, lng: 102.72654931627972 }}
      >
        <Marker position={{ lat: 16.0603361, lng: 102.72654931627972 }} />
      </GoogleMap>
    )
  })
)

export default class LocationSection extends React.Component {
  render() {
    return (
      <Section id="location">
        <Container>
          <AddressBox>
            <LocationText>
              ณ หอประชุมโรงเรียนมูลนิธิบ้านไผ่วิทยา (บ.ว) <br />
              อำเภอบ้านไผ่
              จังหวัดขอนแก่น <br />
              เวลา 18.00 น.
            </LocationText>
          </AddressBox>
          {/* AIzaSyDshWny5uNAuBZ0z66MpbDNlSZtJVtylNQ */}
          <LocationBox>
            {/* <LocationMap
            googleMapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.108993294656!2d102.72654931627972!3d16.06035605897731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3118814d09ed2b67%3A0xf8741afdfa702824!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Lih4Li54Lil4LiZ4Li04LiY4Li04Lia4LmJ4Liy4LiZ4LmE4Lic4LmI4Lin4Li04LiX4Lii4Liy!5e0!3m2!1sth!2sth!4v1527088363076"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.108993294656!2d102.72654931627972!3d16.06035605897731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3118814d09ed2b67%3A0xf8741afdfa702824!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4Lih4Li54Lil4LiZ4Li04LiY4Li04Lia4LmJ4Liy4LiZ4LmE4Lic4LmI4Lin4Li04LiX4Lii4Liy!5e0!3m2!1sth!2sth!4v1527088363076"
              style={{ width: '100%', height: '450' }}
              frameBorder="0"
              allowFullScreen
            />
          </LocationBox>
        </Container>
      </Section>
    )
  }
}
