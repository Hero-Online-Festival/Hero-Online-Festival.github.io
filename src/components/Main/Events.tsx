import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

interface IEvents {
  title: string;
  description: string;
  linkText: string;
  link: string;
  id: string;
}

export const Events = ({
  title,
  description,
  linkText,
  link,
  id,
}: IEvents): React.ReactElement => {
  const history = useHistory();
  const onLinKTo = (link: string, id: string, idx?: string) => {
    history.replace({
      pathname: `${link}/${id}`,
    });
  };
  return (
    <>
      <EventsWrapper onClick={() => onLinKTo(link, id)}>
        <EventsTitle>{title}</EventsTitle>
        <EventsTextWrapper>
          <EventsDescription>{description}</EventsDescription>
          <EventsLinkText>{linkText}</EventsLinkText>
        </EventsTextWrapper>
      </EventsWrapper>
    </>
  );
};

const EventsWrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin-top: 2rem;
  background-color: #fff;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const EventsTitle = styled.div`
  color: #000;
  font-size: 1.2rem;
  width: fit-content;
  height: fit-content;
  font-family: "AppleSDB";
  white-space: pre-line;
`;

const EventsTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const EventsDescription = styled.div`
  color: #8d8d8d;
  font-size: 0.8rem;
`;

const EventsLinkText = styled.div`
  color: #8d8d8d;
  font-size: 0.8rem;
  font-family: "AppleSDM";
`;
