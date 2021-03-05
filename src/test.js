<script>
    $(document).ready(function () {
    setTimeout(function () {
        $(".js-form-proccess").each(function (index, form) {
            var $form = $(form);
            var cartSuccessCallback = $form.data("success-callback");

            var cachedCallback = window[cartSuccessCallback];

            window[cartSuccessCallback] = (function () {
                var formArr = $form.serializeArray();
                var formresult = $form.data('tildaformresult');

                const email = formArr.find(item => item.name === 'Email').value;
                const phone = formArr.find(item => item.name === 'Телефон').value;
                const orderId = formresult.orderid;
                const amount = window.tildaForm.tildapayment.amount;
                const orderDescription = window.tildaForm.tildapayment;

                $.ajax({
                    url: "https://studio.jvcompany.ru/payment_create_link",
                    type: "POST",
                    data: {
                        orderId,
                        email,
                        phone,
                        amount,
                        orderDescription
                    },
                    async: false,
                    success: function (response) {
                        const data = JSON.parse(response);
                        if (data.status === 'ok') {
                            const paymentUrl = data.paymentUrl;
                            window.location.href = paymentUrl;
                        }

                    }
                });
            })
        });
    }, 500);
});
</script>
