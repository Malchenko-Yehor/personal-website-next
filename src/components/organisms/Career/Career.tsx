import H2 from "@atoms/H2";
import { getMonthsDifferenceFromRangesList } from "@helpers/date";
import ClockIcon from "@icons/clock.svg";
import Timeline, { Entry, TimelineProps } from "@organisms/Timeline/Timeline";
import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { DateRange } from "types";
import * as S from "./Career.styled";

export interface CareerProps extends TimelineProps {
  title: string;
}

const Career: FC<CareerProps> = ({ entries, title }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const dateRangesList = mapEntriesToDateRangesList(entries);
  const experience = getExperience(dateRangesList);
  const variants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <S.Career>
      <motion.div
        ref={ref}
        variants={variants}
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <H2 text={title} />
        <S.Experience>
          <ClockIcon />
          <span>{experience}</span>
        </S.Experience>
      </motion.div>
      <Timeline entries={entries} />
    </S.Career>
  );
};

export const getExperience = (dateRangesList: Array<DateRange>) => {
  const expToalAmountInMonths = getMonthsDifferenceFromRangesList(dateRangesList);
  const expAmountInYears = Math.floor(expToalAmountInMonths / 12);
  const expAmountInMonths = expToalAmountInMonths - expAmountInYears * 12;
  const timeFormat = new Intl.RelativeTimeFormat("en", { numeric: "always" });
  const yearsOfExperience =
    expAmountInYears !== 0 ? timeFormat.format(expAmountInYears, "year").match(/\d+.+/g)[0] : "";
  const monthsOfExperience =
    expAmountInMonths !== 0 ? timeFormat.format(expAmountInMonths, "month").match(/\d+.+/g)[0] : "";

  return `${yearsOfExperience} ${monthsOfExperience}`.trim();
};

const mapEntriesToDateRangesList = (entries: Array<Entry>) => {
  return entries.map((entry) => {
    const { startDate, endDate } = entry.infoCard.dateRange;

    return { startDate, endDate };
  });
};

export default Career;
