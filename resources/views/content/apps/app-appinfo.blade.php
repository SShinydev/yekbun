@extends('layouts/layoutMaster')

@section('title', 'App Info')

@section('page-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/css/pages/page-icons.css') }}" />
@endsection

@section('vendor-style')
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css') }}">
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/bs-stepper/bs-stepper.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/flatpickr/flatpickr.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/select2/select2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/tagify/tagify.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/animate-css/animate.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/vendor/libs/dropzone/dropzone.css') }}" />
@endsection

@section('vendor-script')
    <script src="{{ asset('assets/js/main.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js') }}"></script>
    <script src="{{ asset('assets/js/wizard-ex-property-listing.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/bs-stepper/bs-stepper.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/flatpickr/flatpickr.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/select2/select2.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/tagify/tagify.js') }}"></script>
    <script src="{{ asset('assets/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>
    <script src="{{ asset('assets/js/app-ecommerce-product-list.js') }}"></script>
@endsection

@section('content')

    <div class="content-wrapper">

        <!-- Content -->
        <div class="container-xxl flex-grow-1 container-p-y">


            <h4 class="py-3 mb-4">
                <span class="text-muted fw-light">App Settings /</span> App Info
            </h4>

            <div class="row g-4">

                <!-- Navigation -->
                <div class="col-12 col-lg-4">
                    <div class="d-flex justify-content-between flex-column mb-3 mb-md-0">
                        <ul class="nav nav-align-left nav-pills flex-column">
                            <li class="nav-item mb-1">
                                <a class="nav-link"
                                    href="javascript:void(0)">
                                    <i class="bx bx-store me-2"></i>
                                    <span class="align-middle">Store details</span>
                                </a>
                            </li>
                            <li class="nav-item mb-1">
                                <a class="nav-link"
                                    href="javascript:void(0)">
                                    <i class="bx bxs-credit-card me-2"></i>
                                    <span class="align-middle">Payments</span>
                                </a>
                            </li>
                            <li class="nav-item mb-1">
                                <a class="nav-link"
                                    href="javascript:void(0)">
                                    <i class="bx bx-cart me-2"></i>
                                    <span class="align-middle">Checkout</span>
                                </a>
                            </li>
                            <li class="nav-item mb-1">
                                <a class="nav-link"
                                    href="javascript:void(0)">
                                    <i class="bx bx-package me-2"></i>
                                    <span class="align-middle">Shipping &amp; delivery</span>
                                </a>
                            </li>
                            <li class="nav-item mb-1">
                                <a class="nav-link active" href="javascript:void(0);">
                                    <i class="bx bx-location-plus me-2"></i>
                                    <span class="align-middle">Locations</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"
                                    href="javascript:void(0)">
                                    <i class="bx bx-bell me-2"></i>
                                    <span class="align-middle">Notifications</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /Navigation -->

                <!-- Options -->
                <div class="col-12 col-lg-8 pt-4 pt-lg-0">
                    <div class="tab-content p-0">
                        <!-- Locations Tab -->
                        <div class="tab-pane fade show active" id="locations" role="tabpanel">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title m-0">Location Name</h5>
                                </div>
                                <div class="card-body">
                                    <div class="col-12 mb-3">
                                        <label for="locationName" class="form-label mb-0">Location Name</label>
                                        <input class="form-control" type="text" name="locationName" id="locationName"
                                            placeholder="Shop location">

                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="def_location"
                                            checked="" disabled="">
                                        <label class="form-check-label" for="def_location">
                                            Fulfill online orders from this location
                                        </label>
                                    </div>
                                    <div class="alert d-flex align-items-center bg-label-info mb-0" role="alert">
                                        <span class="alert-icon text-info me-2 bg-label-light px-1 rounded-2">
                                            <i class="bx bx-info-circle bx-xs"></i>
                                        </span>
                                        This is your default location. To change whether you fulfill online orders from this
                                        location, select another default location first.
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title m-0">Address</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label mb-0" for="country_region">Country/region</label>
                                            <div class="position-relative"><select id="country_region"
                                                    class="select2 form-select select2-hidden-accessible"
                                                    data-placeholder="United States" data-select2-id="country_region"
                                                    tabindex="-1" aria-hidden="true">
                                                    <option value="" data-select2-id="2">United States</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="China">China</option>
                                                    <option value="France">France</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="India">India</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Korea">Korea, Republic of</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Philippines">Philippines</option>
                                                    <option value="Russia">Russian Federation</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                </select><span class="select2 select2-container select2-container--default"
                                                    dir="ltr" data-select2-id="1" style="width: 696px;"><span
                                                        class="selection"><span
                                                            class="select2-selection select2-selection--single"
                                                            role="combobox" aria-haspopup="true" aria-expanded="false"
                                                            tabindex="0" aria-disabled="false"
                                                            aria-labelledby="select2-country_region-container"><span
                                                                class="select2-selection__rendered"
                                                                id="select2-country_region-container" role="textbox"
                                                                aria-readonly="true"><span
                                                                    class="select2-selection__placeholder">United
                                                                    States</span></span><span
                                                                class="select2-selection__arrow" role="presentation"><b
                                                                    role="presentation"></b></span></span></span><span
                                                        class="dropdown-wrapper" aria-hidden="true"></span></span></div>

                                        </div>
                                        <div class="col-12 col-md-4">
                                            <label class="form-label mb-0" for="loc_address">Address</label>
                                            <input type="text" id="loc_address" class="form-control"
                                                placeholder="Address">
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <label class="form-label mb-0" for="loc_apa_suite">Apartment, suite,
                                                etc.</label>
                                            <input type="text" id="loc_apa_suite" class="form-control"
                                                placeholder="Apartment, suite, etc.">
                                        </div>
                                        <div class="col-12 col-md-4"><label class="form-label mb-0"
                                                for="loc_phone">Phone</label>
                                            <input type="tel" class="form-control phone-mask" id="loc_phone"
                                                placeholder="Phone" name="loc_phone" aria-label="loc_phone">
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <label class="form-label mb-0" for="loc_city">City</label>
                                            <input type="text" id="loc_city" class="form-control"
                                                placeholder="City">
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <label class="form-label mb-0" for="loc_state">State</label>
                                            <input type="text" id="loc_state" class="form-control"
                                                placeholder="State">
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <label class="form-label mb-0" for="loc_pincode">PIN Code</label>
                                            <input type="number" id="loc_pincode" class="form-control"
                                                placeholder="PIN Code" min="0" max="999999">
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div class="d-flex justify-content-end gap-3">
                                <button type="reset" class="btn btn-label-secondary">Discard</button>
                                <a class="btn btn-primary"
                                    href="javascript:void(0)">Save</a>
                            </div>
                        </div>
                    </div>
                    <!-- /Options-->
                </div>
            </div>

        </div>
        <!-- / Content -->

        <div class="content-backdrop fade"></div>
    </div>

    <script>
        function delete_service(el) {
            let link = $(el).data('id');
            $('.deleted-modal').modal('show');
            $('#delete_form').attr('action', link);
        }
    </script>


@section('page-script')
    <script>
        function confirmAction(event, callback) {
            event.preventDefault();
            Swal.fire({
                title: 'Are you sure?',
                text: "Are you sure you want to delete this?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                customClass: {
                    confirmButton: 'btn btn-danger me-3',
                    cancelButton: 'btn btn-label-secondary'
                },
                buttonsStyling: false
            }).then(function(result) {
                if (result.value) {
                    callback();
                }
            });
        }
    </script>
    <script>
        function drpzone_init() {
            dropZoneInitFunctions.forEach(callback => callback());
        }
    </script>
    <script src="https://unpkg.com/dropzone@6.0.0-beta.1/dist/dropzone-min.js" onload="drpzone_init()"></script>
@endsection
@endsection
