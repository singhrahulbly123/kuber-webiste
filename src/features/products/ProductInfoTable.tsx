const ProductInfoTable = () => {
    return (
        <div className="product-table-wrapper">
            <h3 className="pro-table">Product Specifications:</h3>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Product</th>
                        <th>Low fat (Skimmed) milk powder blend</th>
                        <th>Low fat (Skimmed) milk powderblend</th>
                    </tr>
                </thead>

                <tbody>

                    <tr className="section-heading">
                        <td colSpan={4}>Chemicals</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Physical appearance</td>
                        <td>Blend of dairy powder of low fat content</td>
                        <td>Blend of dairy powder of low fat content</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Flavor and taste</td>
                        <td>Pleasant & clean</td>
                        <td>Pleasant & clean</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Moisture (% by wt.)</td>
                        <td>4.0 (max)</td>
                        <td>4.0 (max)</td>
                    </tr>

                    <tr className="section-heading">
                        <td colSpan={4}>Heavy Metals</td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Arsenic (as As)</td>
                        <td>1mg/kg(max)</td>
                        <td>1mg/kg(max)</td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Lead (as Pb)</td>
                        <td>0.02mg/kg(max)</td>
                        <td>0.02mg/kg(max)</td>
                    </tr>

                    <tr className="section-heading">
                        <td colSpan={4}>Microbiological specifications</td>
                    </tr>

                    <tr>
                        <td>12</td>
                        <td>Escheria coli cfu/g</td>
                        <td>15mg/kg(max)</td>
                        <td>15mg/kg(max)</td>
                    </tr>

                    <tr>
                        <td>16</td>
                        <td>Bacillus cereus cfu/g</td>
                        <td>1000</td>
                        <td>1000</td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
};

export default ProductInfoTable;