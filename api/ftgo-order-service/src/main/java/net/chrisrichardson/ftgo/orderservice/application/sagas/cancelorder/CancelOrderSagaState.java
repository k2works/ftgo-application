package net.chrisrichardson.ftgo.orderservice.application.sagas.cancelorder;

public enum CancelOrderSagaState {
  state, WAITING_TO_AUTHORIZE, COMPLETED, REVERSING
}
