import Button, { ButtonType } from "./components/Button";

function App() {
  const buttonCount = 1000;
  const buttonTypes: ButtonType[] = [
    "primary",
    "secondary",
    "warning",
    "success",
  ];

  const buttonElements = Array.from({ length: buttonCount }).map((_, index) => {
    const randomType =
      buttonTypes[Math.floor(Math.random() * buttonTypes.length)];

    const label = `${randomType.charAt(0).toUpperCase() + randomType.slice(1)}`;

    const disabled = Math.random() < 0.1;

    const sizes: ("small" | "medium" | "large")[] = [
      "small",
      "medium",
      "large",
    ];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    return (
      <Button
        key={index}
        type={randomType}
        size={randomSize}
        label={label}
        disabled={disabled}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
      }}
    >
      {buttonElements}
    </div>
  );
}

export default App;
