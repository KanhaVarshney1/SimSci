##  Procedure

###  Case 1: Measure Load Current in the Original Circuit
1. Connect the circuit with all resistors (R₁, R₂, R₃, R<sub>L</sub>) and sources (V₁, V₂).
2. Set Switch **S1 = Power**, **S2 = Load**.
3. Use the ammeter to measure current through R<sub>L</sub>.
4. Record this as **Load Current (I<sub>L</sub>)**.

---

###  Case 2(a): Determine Thevenin Voltage (V<sub>th</sub>)
1. Remove the load resistor R<sub>L</sub>.
2. Set Switch **S1 = Power**, **S2 = Intermediate**.
3. Use a voltmeter across load terminals to measure open-circuit voltage.
4. This voltage is **Thevenin Voltage (V<sub>th</sub>)**.

---

###  Case 2(b): Determine Thevenin Resistance (R<sub>th</sub>)
1. Replace all independent voltage sources (V₁, V₂) with short circuits.
2. Set Switch **S1 = Short**, **S2 = Power**.
3. Measure the equivalent resistance across the open load terminals.
4. This is **Thevenin Resistance (R<sub>th</sub>)**.

---

###  Case 3: Verify with Thevenin Equivalent Circuit
1. Build Thevenin equivalent circuit with V<sub>th</sub> in series with R<sub>th</sub> and R<sub>L</sub>.
2. Calculate or measure the current through R<sub>L</sub>.
3. This is **Thevenin Load Current**.
