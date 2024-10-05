import { ComboCard } from "@/components/ComboCard";
import comboCardAsButton from "@/components/comboCardAsButton";
import withActonButtons from "@/components/withActionButtons";
import withComboActions from "@/components/withComboActions";

const ActionsCard = withActonButtons(ComboCard);
const ButtonCard = comboCardAsButton(ComboCard);
const DescriptionCard = withComboActions(ComboCard);

export { ActionsCard, ButtonCard, DescriptionCard };
