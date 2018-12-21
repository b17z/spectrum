// @flow
import styled from 'styled-components';
import theme from 'shared/theme';
import { zIndex } from '../../globals';
import { isMobile } from '../../../helpers/utils';

const maxWidth = '540px';
const mobile = isMobile();
export const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: mobile ? 'flex-start' : 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndex: zIndex.modal - 1,
    padding: '1.2rem',
  },
  content: {
    position: 'relative',
    background: '#ffffff',
    backgroundClip: 'padding-box',
    borderRadius: '8px',
    border: '0',
    padding: '0',
    zIndex: zIndex.modal,
    width: '100%',
    maxWidth: maxWidth,
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto',
    backgroundColor: 'rgba(0,0,0,0)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.40)',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
};

export const Section = styled.section`
  display: flex;
  padding: 0px;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${theme.text.default};
  padding: 0 24px 16px 16px;
  border-bottom: 1px solid ${props => props.theme.bg.border};
  line-height: 1.4;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.text.alt};
  text-align: center;
`;

export const SelectorContainer = styled.div`
  display: flex;
  padding: 32px 0 16px;
  justify-content: center;
  align-items: center;
  width: 100%;

  select {
    max-width: 100%;
    width: 100%;
  }
`;

export const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  width: 100%;
  justify-content: center;
  button {
    flex: 1;
  }
  button + button {
    margin-left: 8px;
  }
`;

export const TagsContainer = styled.section`
  width: 100%;
  padding: 8px 16px;
  max-height: 320px;
  overflow-y: scroll;
`;

export const CreateTagFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.bg.border};
  padding: 16px;
`;
