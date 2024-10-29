package net.chrisrichardson.ftgo.orderservice.infrastructure.sagaparticipants;

public class ConfirmCancelOrderCommand extends OrderCommand {

  private ConfirmCancelOrderCommand() {
  }

  public ConfirmCancelOrderCommand(long orderId) {
    super(orderId);
  }
}
