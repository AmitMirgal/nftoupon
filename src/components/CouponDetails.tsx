import {
  Container,
  Spacer,
  Input,
  Textarea,
  Row,
  Button,
} from '@nextui-org/react';
import React from 'react';

type Details = {
  title: string;
  description: string;
  image: string;
  status: string;
  onClick: (value: {
    title: string;
    description: string;
    image: string;
    status: string;
  }) => void;
  acceptBtnText: string;
  readOnlyForCreator?: boolean;
};

export const CouponDetails = (props: Details) => {
  const clickEvent = (status: string) => {
    // do something status = Accept or reject
    const data = {
      title: props.title,
      description: props.description,
      image: props.image,
      status: status,
    };
    props.onClick(data);
  };

  return (
    <>
      <Container display="flex" justify="center" fluid>
        <img height="180px" src={props.image} alt="Creator's NFT image" />
      </Container>

      <Spacer y={0.5} />
      <Input readOnly width="100%" label="Title" initialValue={props.title} />
      <Spacer y={0.5} />
      <Textarea
        readOnly
        width="100%"
        label="Description"
        initialValue={props.description}
        maxRows={4}
      />
      <Spacer y={0.5} />
      <Input
        readOnly={props.readOnlyForCreator}
        required
        label="Offer"
        type="number"
        labelRight="XRP"
        min={1}
        width="100%"
        initialValue={'1'}
      />
      <Spacer y={0.5} />
      <Input
        readOnly={props.readOnlyForCreator}
        width="100%"
        required
        label="Date"
        type="date"
      />
      <Spacer y={0.8} />
      <Row justify='space-around'>
            <Button
              onClick={() => clickEvent('Accepted')}
              css={{ height: '40px'}}
              auto
              color="success"
            >
              {props.acceptBtnText}
            </Button>
            <Button
              css={{ height: '40px'}}
              auto
              color="error"
              onClick={() => clickEvent('Rejected')}
            >
              Reject
            </Button>
      </Row>
    </>
  );
};