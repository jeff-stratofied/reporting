import KpiBox from "./components/KpiBox";
import loansData from "./data/loans.json";

// TIMELINE TEST 1 - safe to delete

// TIMELINE TEST 2 - safe to delete

// TIMELINE TEST 3 - safe to delete

function App() {
  const loans = loansData.loans || [];

  // Total Original Loans
  const totalOriginalAmount = loans.reduce((sum, loan) => {
    return sum + (Number(loan.principal) || 0);
  }, 0);
  const formattedTotal = `$${totalOriginalAmount.toLocaleString()}`;

  // Weighted Average Rate
  const totalWeightedRate = loans.reduce((sum, loan) => {
    const principal = Number(loan.principal) || 0;
    const rate = Number(loan.rate) || 0;
    return sum + principal * rate;
  }, 0);
  const avgRate =
    totalOriginalAmount > 0
      ? (totalWeightedRate / totalOriginalAmount) * 100
      : 0;
  const formattedAvgRate = `${avgRate.toFixed(2)}%`;

  // Simple Monthly Income (this worked before – $4,019)
  const monthlyIncome = loans.reduce((total, loan) => {
    const principal = Number(loan.principal) || 0;
    const annualRate = Number(loan.rate) || 0;
    const termYears = Number(loan.termYears) || 10;
    const months = termYears * 12;

    if (principal <= 0 || months <= 0 || annualRate <= 0) return total;

    const monthlyRate = annualRate / 12;
    const power = Math.pow(1 + monthlyRate, months);

    const payment = (principal * (monthlyRate * power)) / (power - 1);

    return total + payment;
  }, 0);
  const formattedMonthly = `$${Math.round(monthlyIncome).toLocaleString()}`;

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "24px", color: "#0f172a" }}>
        Stratofied – Amortization (Phase 1 Test)
      </h1>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <KpiBox
          label="Total Original Loans"
          value={formattedTotal}
          subtitle={`from ${loans.length} loans`}
        />
        <KpiBox
          label="Average Rate"
          value={formattedAvgRate}
          subtitle="weighted by principal"
        />
        <KpiBox
          label="Monthly Income"
          value={formattedMonthly}
          subtitle="simple estimate"
        />
        <KpiBox label="Total Invested" value="$94,500" />
      </div>

      <p style={{ marginTop: "32px", color: "#64748b" }}>
        Loaded {loans.length} loans from data/loans.json
      </p>
    </div>
  );
}

export default App;
