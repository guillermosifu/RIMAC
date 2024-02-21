import PropTypes from 'prop-types';

export const Description = ({ title, info, subInfo }) => (
  <span className="flex flex-col gap-1">
    <h4>{title}</h4>
    <p className="font-normal text-sm leading-[24px] tracking-[.1px]">{info}</p>
    <p className="font-normal text-sm leading-[24px] tracking-[.1px]">{subInfo}</p>
  </span>
);

Description.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  subInfo: PropTypes.string,
}