// Imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqAccordion() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      {/* العنصر الأول */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1 (السؤال الأول)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* العنصر الثاني */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2 (السؤال الثاني)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            هنا المحتوى الخاص بالسؤال الثاني، يقفل ويفتح بكل انسيابية لوحده من
            غير ما تكتب كود جافاسكريبت للتحكم في الـ State!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
