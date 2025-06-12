# Thevenin's Theorem

## Theory

Thevenin’s Theorem is a fundamental principle in electrical engineering that simplifies the analysis of complex linear circuits. According to this theorem:

> **Any linear, bilateral electrical network with voltage and current sources and resistors can be replaced by an equivalent circuit consisting of a single voltage source (V<sub>th</sub>) in series with a single resistance (R<sub>th</sub>), connected to the load.**

### Key Concepts

- **V<sub>th</sub> (Thevenin Voltage)**: The open-circuit voltage measured across the terminals of the network where the load is connected.
- **R<sub>th</sub> (Thevenin Resistance)**: The equivalent resistance seen from the load terminals when all independent voltage sources are replaced by short circuits and all current sources are replaced by open circuits.

### Steps to Determine Thevenin Equivalent:

1. **Remove the load resistor** from the original circuit.
2. **Calculate the open-circuit voltage** (V<sub>oc</sub>) across the open load terminals. This is V<sub>th</sub>.
3. **Find the equivalent resistance** (R<sub>th</sub>) of the network as seen from the open terminals:
   - Replace all voltage sources with short circuits.
   - Replace all current sources with open circuits.
4. **Draw the Thevenin equivalent circuit**: Connect V<sub>th</sub> in series with R<sub>th</sub>, and connect the load resistor across the terminals.

### Advantages

- Simplifies circuit analysis.
- Helps in analyzing power systems and transistor circuits.
- Useful in determining the effect of changing the load resistance.

### Application

Thevenin’s Theorem is widely used in:
- Simplifying power system networks.
- Analyzing amplifier circuits.
- Studying the maximum power transfer condition.

---

**Note**: Thevenin’s Theorem is applicable only to **linear, bilateral networks** (networks having linear components like resistors, voltage/current sources, etc.).
