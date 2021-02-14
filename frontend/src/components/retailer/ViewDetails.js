/* eslint-disable jsx-a11y/anchor-is-valid */
import "./layout.scss";
import "./reset.scss";

import React from 'react'

const ViewDetails = () => {
    return (
        <>
        {/* // <!-- Modal Window -->} */}
    <div id="modalWrapper">

        <div class="modal-header" id="modal-header">

            {/* <h3 id="modal-title"></h3>
            <a id="close-modal" class="close-modal" href="#">&times;</a> */}

        </div>

        <div class="modal-body" id="modal-body">
            <div class="modal" id='modal'>
            </div>

        </div>
    </div>
    {/* // <!-- End Modal Window -->} */}

    {/* // <!-- The top level wrapper for markup begins -->} */}
    <div id="wrapper">

        {/* <!-- Container for the dashboard begins -->} */}
        <div id="container">

            {/* <!-- Global year filter -->} */}
            <div class="top-level-select-filter" id="top-level-select-filter">
                <span>View For Year:</span>
                <select id="global_year_filter">
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>

            {/* <!-- Logo -->} */}
            <div class="logo-container">

                <div id="fflogo"></div>


            </div>

            <div id="dashboard-content">

                <div id="sidebar" class="pull-left">
                    <div id="profile-pic" class="pull-left">
                        <img src="https://ui-avatars.com/api/?name=Deepak+Yadav" alt="John Profile Pic" title="User Profile Pic" />
                    </div>
                    <div id="profile-name" class="pull-left">
                        <p>Hello Retailer</p>
                    </div>
                    <div id="main-menu" class="clearboth">
                        <div id="main-menu-icon" class="icon pull-left"></div>
                        <h4 class="pull-left">Dashboard</h4>
                    </div>
                    <ul id="sub-menu">
                        <li><a href="#summary" id="summary-link">Summary</a>
                        </li>
                        <li><a href="#sales" id="sales-link">Sales</a>
                        </li>
                        <li><a href="#kpi" id="kpi-link">KPI</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Wrapper for tabs -->} */}
                <div class="tabs-wrapper">

                    {/* <!-- Initial loader image -->} */}
                    {/* <div id="loader">
                        <p>Loading...</p>
                    </div> */}

                    {/* <!-- Summary Dashboard Tab -->} */}
                    <div id="summary-tab">


                        <div class="chart-content pull-right">

                            <div class="chart-category pull-left">
                                <h2 class="chart-category-heading">Yearly Sales Comparison</h2>
                                <div class="divider"></div>

                                {/* <!-- Yearly sales summary chart -->} */}
                                <div id="yearly-sales-chart"></div>
                            </div>
                            <div class="chart-category pull-right no-border">
                                <h2 class="chart-category-heading pull-left">Top Sales Performers</h2>

                                {/* <!-- Number filter for top sales performers chart -->} */}
                                <select class="pull-right" id="top_sales_performers_summary_number_filter" name="top_sales_performers_summary_number_filter">
                                    <option value="3">Top 3</option>
                                    <option value="5">Top 5</option>
                                    <option value="all">All</option>
                                </select>


                                {/* <!-- Yearly filter for top sales performers chart -->} */}
                                <select class="pull-right" id="top_sales_performers_summary_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>


                                <div class="divider clearboth"></div>

                                {/* <!-- Top sales performers chart -->} */}
                                <div id="top-sales-performers-chart"></div>
                            </div>
                            <div class="chart-category pull-left">
                                <h2 class="chart-category-heading pull-left">Top Categories</h2>

                                {/* <!-- Number filter for top categories chart -->} */}
                                <select class="pull-right" id="top_categories_summary_number_filter">
                                    <option value="5">Top 5</option>
                                    <option value="all">All</option>
                                </select>

                                {/* <!-- Yearly filter for top categories chart -->} */}
                                <select class="pull-right" id="top_categories_summary_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>

                                {/* <!-- Top sales categories chart -->} */}
                                <div id="top-sales-categories-chart"></div>


                            </div>

                            <div class="chart-category pull-right no-border">
                                <h2 class="chart-category-heading pull-left">Top Countries By Revenue</h2>

                                {/* <!-- Number filter for top countries by revenue chart -->} */}
                                <select class="pull-right" id="top_revenues_country_number_filter">
                                    <option value="5">Top 5</option>
                                    <option value="10">Top 10</option>
                                    {/* <!-- <option value="all">All</option> -->} */}
                                </select>

                                {/* <!-- Yearly filter for top countries by revenue chart -->} */}
                                <select class="pull-right" id="top_revenues_country_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>

                                {/* <!-- Top countries by revenue chart -->} */}
                                <div id="top-revenues-countries-chart"></div>

                            </div>


                            <div class="chart-category full-width">
                                <h2 class="chart-category-heading pull-left">Top Products</h2>

                                {/* <!-- Number filter for top products chart -->} */}
                                <select class="pull-right" id="top_products_summary_number_filter">
                                    <option value="5">Top 5</option>
                                    <option value="10">Top 10</option>
                                </select>

                                {/* <!-- Yearly filter for top products chart -->} */}
                                <select class="pull-right" id="top_products_summary_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>

                                {/* <!-- Top products chart -->} */}
                                <div id="top-products-chart"></div>

                            </div>

                            <div class="chart-category pull-left">
                                <h2 class="chart-category-heading pull-left">Top Cities By Sales</h2>

                                {/* <!-- Number filter for top cities by sales chart -->} */}
                                <select class="pull-right" id="top_revenues_cities_summary_number_filter">
                                    <option value="5">Top 5</option>
                                    <option value="10">Top 10</option>
                                    <option value="all">All</option>
                                </select>

                                {/* <!-- Yearly filter for top cities by sales chart -->} */}
                                <select class="pull-right" id="top_revenues_cities_summary_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>


                                {/* <!-- Top cities by sales chart -->} */}
                                <div id="top-revenues-cities-chart"></div>



                            </div>

                            <div class="chart-category pull-right no-border">
                                <h2 class="chart-category-heading pull-left">Top Customers</h2>

                                {/* <!-- Number filter for top customers chart -->} */}
                                <select class="pull-right" id="top_customers_summary_number_filter">
                                    <option value="5">Top 5</option>
                                    <option value="10">Top 10</option>
                                </select>

                                {/* <!-- Yearly filter for top customers chart -->} */}
                                <select class="pull-right" id="top_customers_summary_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>

                                {/* <!-- Top customer chart -->} */}
                                <div id="top-customers-chart"></div>
                                <div id="top-customers-chart-table" class="table top-customers-table"></div>



                            </div>



                        </div>

                    </div>

                    {/* <!-- Sales Dashboard Tab -->} */}
                    <div id="sales-tab">

                        <div class="chart-content pull-right">


                            <div class="chart-category pull-left">
                                <h2 class="chart-category-heading pull-left">Top Categories By Sales</h2>

                                {/* <!-- Yearly filter for top categories by sales chart -->} */}
                                <select class="pull-right" id="top_categories_sales_tab_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>


                                <div class="drill-caption-wrapper">
                                    <div class="drill-caption">Click on a colum to view details</div>
                                </div>

                                {/* <!-- Top categories by sales chart -->} */}
                                <div id="top-categories-sales-tab-chart"></div>

                            </div>

                            <div class="chart-category pull-right no-border">
                                <h2 class="chart-category-heading pull-left">Top Performers By Sales</h2>


                                {/* <!-- Yearly filter for top performers by sales chart -->} */}
                                <select class="pull-right" id="top_performers_sales_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>


                                <div class="drill-caption-wrapper">
                                    <div class="drill-caption">Click on a colum to view details</div>
                                </div>

                                {/* <!-- op performers by sales chart -->} */}
                                <div id="top-performers-sales-tab-chart"></div>

                            </div>

                            <div class="chart-category full-width">
                                <h2 class="chart-category-heading pull-left">Monthly Sales</h2>

                                {/* <!-- Yearly filter for monthly sales chart -->} */}
                                <select class="pull-right" id="top_monthly_sales_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <div class="divider clearboth"></div>


                                {/* <!-- Top monthly sales chart -->} */}
                                <div id="top-monthly-sales-tab-chart"></div>

                            </div>



                        </div>
                    </div>

                    {/* <!-- KPI Dashboard Tab -->} */}
                    <div id="kpi-tab">

                        <div class="chart-content pull-right">

                            <div class="chart-category pull-left">

                                {/* <!-- Yearly filter for cost of inventory by product categories chart -->} */}
                                <select class="pull-right" id="inventory_by_categories_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <h2 class="chart-category-heading pull-left">Cost of Inventory by product categories</h2>

                                <div class="divider clearboth"></div>

                                {/* <!-- Cost of Inventory by product categories chart -->} */}
                                <div id="inventory-by-product-categories-chart"></div>

                            </div>

                            <div class="chart-category pull-right no-border">

                                {/* <!-- Yearly filter for cost of goods sold chart -->} */}
                                <select class="pull-right" id="cost_of_goods_sold_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <h2 class="chart-category-heading pull-left">Cost Of Goods Sold</h2>

                                <div class="divider clearboth"></div>

                                {/* <!-- Cost of goods sold chart -->} */}
                                <div id="cost-of-goods-sold-chart"></div>

                            </div>

                            <div class="chart-category pull-left">

                                {/* <!-- Yearly filter for average shipping time chart -->} */}
                                <select class="pull-right" id="average_shipping_time_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <h2 class="chart-category-heading pull-left">Average Shipping Time</h2>

                                <div class="divider clearboth"></div>

                                {/* <!-- Average shipping time chart -->} */}
                                <div id="average-shipping-time-chart"></div>

                            </div>

                            <div class="chart-category pull-right no-border">

                                {/* <!-- Yearly filter for customer satisfaction chart -->} */}
                                <select class="pull-right" id="customer_satisfaction_year_filter">
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>

                                <h2 class="chart-category-heading pull-left">Customer Satisfaction</h2>

                                <div class="divider clearboth"></div>

                                {/* <!-- Customer satisfaction chart -->} */}
                                <div id="customer-satisfaction-chart"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <!-- Footer section begins -->} */}
            <div class="footer"></div>
        </div>
        {/* <!-- Container for the dashboard ends -->} */}

    </div></>
    
    )
}

export default ViewDetails
