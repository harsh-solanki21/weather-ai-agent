import React from "react";

interface InterpretationCardProps {
  interpretation: string;
}

const InterpretationCard: React.FC<InterpretationCardProps> = ({
  interpretation,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        AI Weather Interpretation
      </h3>
      <div className="text-gray-700 prose">{interpretation}</div>
    </div>
  );
};

export default InterpretationCard;
